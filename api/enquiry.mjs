const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).json({ error: 'Method not allowed.' }); }
  if (!req.headers['content-type']?.includes('application/json')) return res.status(415).json({ error: 'Please submit JSON.' });
  let body;
  try { body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body; }
  catch { return res.status(400).json({ error: 'Invalid request.' }); }
  if (!body || typeof body !== 'object' || Array.isArray(body)) return res.status(400).json({ error: 'Invalid request.' });
  if (JSON.stringify(body).length > 12000) return res.status(413).json({ error: 'Your message is too long.' });
  if (body.website) return res.status(400).json({ error: 'Unable to accept this request.' });
  const limits = { name: 120, email: 254, phone: 40, company: 160, service: 160, message: 5000 };
  const data = {};
  for (const [field, limit] of Object.entries(limits)) {
    if (body[field] !== undefined && (typeof body[field] !== 'string' || body[field].length > limit)) return res.status(400).json({ error: 'Please check your form entries.' });
    data[field] = (body[field] || '').trim();
  }
  if (!emailPattern.test(data.email) || /[\r\n]/.test(data.email)) return res.status(400).json({ error: 'Please enter a valid email address.' });
  if (!['consultation', 'insights'].includes(body.kind)) return res.status(400).json({ error: 'Invalid request type.' });
  if (body.kind === 'consultation' && (!data.name || data.message.length < 10)) return res.status(400).json({ error: 'Please enter your name and a message of at least 10 characters.' });
  const { RESEND_API_KEY, CONTACT_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_FROM_EMAIL) return res.status(503).json({ error: 'Online enquiries are temporarily unavailable. Please email us directly.' });
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL, to: ['mzaki@zakiassociates.com'], reply_to: data.email,
        subject: body.kind === 'insights' ? 'Website: request for insights' : 'Website: consultation enquiry',
        text: Object.entries(data).map(([key, value]) => `${key}: ${value}`).join('\n\n'),
      }),
      signal: AbortSignal.timeout(10000),
    });
    const result = await response.json().catch(() => null);
    if (!response.ok || !result?.id) return res.status(502).json({ error: 'Your enquiry could not be sent. Please try again or email us directly.' });
    return res.status(200).json({ ok: true });
  } catch { return res.status(502).json({ error: 'The email service is unavailable. Please try again or email us directly.' }); }
}
