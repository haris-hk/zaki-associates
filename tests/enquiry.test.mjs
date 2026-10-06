import { test, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import handler from '../api/enquiry.mjs';
const originalFetch = globalThis.fetch;
const originalEnv = { ...process.env };
afterEach(() => { globalThis.fetch = originalFetch; for (const key of ['RESEND_API_KEY', 'CONTACT_FROM_EMAIL']) { if (originalEnv[key] === undefined) delete process.env[key]; else process.env[key] = originalEnv[key]; } });
const valid = { kind: 'consultation', name: 'Test Visitor', email: 'test@example.com', message: 'Please discuss accounting services.' };
async function call(body = valid, method = 'POST', contentType = 'application/json') {
  const res = { code: 200, headers: {}, setHeader(k, v) { this.headers[k] = v; }, status(v) { this.code = v; return this; }, json(v) { this.body = v; return this; } };
  await handler({ method, headers: { 'content-type': contentType }, body }, res);
  return res;
}
function configure() { Object.assign(process.env, { RESEND_API_KEY: 'test-key', CONTACT_FROM_EMAIL: 'website@example.com' }); }
test('rejects invalid input before attempting email', async () => {
  globalThis.fetch = () => { throw new Error('Must not send'); };
  for (const body of [{}, { ...valid, email: 'invalid' }, { ...valid, name: ' ' }, { ...valid, message: 'short' }, { ...valid, website: 'spam' }, { ...valid, email: ['test@example.com'] }, { ...valid, message: 'x'.repeat(5001) }, '{invalid']) assert.equal((await call(body)).code, 400);
});
test('only accepts POST and JSON', async () => { assert.equal((await call(valid, 'GET')).code, 405); assert.equal((await call(valid, 'POST', 'text/plain')).code, 415); });
test('missing configuration never returns success', async () => { delete process.env.RESEND_API_KEY; assert.equal((await call()).code, 503); });
test('sends to authorized recipient with visitor reply address', async () => {
  configure();
  globalThis.fetch = async (url, options) => { assert.equal(url, 'https://api.resend.com/emails'); const body = JSON.parse(options.body); assert.deepEqual(body.to, ['mzaki@zakiassociates.com']); assert.equal(body.reply_to, valid.email); return { ok: true, json: async () => ({ id: 'test-id' }) }; };
  assert.deepEqual((await call()).body, { ok: true });
});
test('provider rejection and network errors do not report success', async () => {
  configure(); globalThis.fetch = async () => ({ ok: false, json: async () => ({ error: 'failure' }) }); assert.equal((await call()).code, 502);
  globalThis.fetch = async () => { throw new Error('network'); }; assert.equal((await call()).code, 502);
});
test('insights request is explicitly forwarded to the team', async () => {
  configure(); globalThis.fetch = async (_, options) => { assert.match(JSON.parse(options.body).subject, /request for insights/); return { ok: true, json: async () => ({ id: 'test-id' }) }; };
  assert.equal((await call({ kind: 'insights', email: 'visitor@example.com' })).code, 200);
});
