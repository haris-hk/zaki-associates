import { useId, useRef, useState, type FormEvent } from 'react';

export default function EnquiryForm({ dark = false, newsletter = false }: { dark?: boolean; newsletter?: boolean }) {
  const id = useId();
  const busy = useRef(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');
  const field = `w-full min-w-0 rounded-sm border px-4 py-3 text-base sm:text-sm transition-colors ${dark ? 'bg-[#063D3A] border-white/25 text-[#F7F8F4]' : 'bg-white border-[#1A1A18]/20 text-[#1A1A18]'}`;
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy.current) return;
    busy.current = true;
    const form = event.currentTarget;
    setStatus('sending');
    setError('');
    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...Object.fromEntries(new FormData(form)), kind: newsletter ? 'insights' : 'consultation' }),
        signal: AbortSignal.timeout(15000),
      });
      const data = await response.json().catch(() => null);
      if (!response.ok || data?.ok !== true) throw new Error(data?.error || 'Your request could not be sent. Please try again or email us directly.');
      setStatus('success');
      form.reset();
    } catch (err) {
      setError(err instanceof Error && err.name !== 'TimeoutError' ? err.message : 'The request timed out. Please try again or email us directly.');
      setStatus('error');
    } finally { busy.current = false; }
  }
  return (
    <div className={`w-full min-w-0 ${dark ? 'text-[#F7F8F4]' : 'text-[#0B4A46]'}`}>
      {status === 'success' ? <div role="status" className="py-10">
        <h3 className="font-display text-3xl mb-4">Thank you.</h3>
        <p className="text-sm leading-relaxed">{newsletter ? 'Your interest in receiving insights has been sent to our team.' : 'Your enquiry has been sent to our team. We look forward to speaking with you.'}</p>
        <button type="button" className="mt-6 underline underline-offset-4" onClick={() => setStatus('idle')}>Send another request</button>
      </div> : <form onSubmit={submit} className="flex flex-col gap-4" aria-busy={status === 'sending'}>
        <fieldset disabled={status === 'sending'} className="flex flex-col gap-4 min-w-0 disabled:opacity-70">
          {!newsletter && <label className="form-label" htmlFor={`${id}-name`}>Full name *<input id={`${id}-name`} name="name" autoComplete="name" required maxLength={120} className={field} /></label>}
          <label className="form-label" htmlFor={`${id}-email`}>Email *<input id={`${id}-email`} name="email" type="email" autoComplete="email" required maxLength={254} className={field} placeholder="you@company.com" /></label>
          {!newsletter && <>
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="form-label" htmlFor={`${id}-phone`}>Phone<input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" maxLength={40} className={field} /></label>
              <label className="form-label" htmlFor={`${id}-company`}>Company<input id={`${id}-company`} name="company" autoComplete="organization" maxLength={160} className={field} /></label>
            </div>
            <label className="form-label" htmlFor={`${id}-service`}>Service<select id={`${id}-service`} name="service" className={field} defaultValue=""><option value="">Select a service</option>{['Accounting & Financial Management', 'Audit & Assurance', 'Tax Advisory & Compliance', 'Strategic Financial Advisory'].map(s => <option key={s}>{s}</option>)}</select></label>
            <label className="form-label" htmlFor={`${id}-message`}>Message *<textarea id={`${id}-message`} name="message" required minLength={10} maxLength={5000} rows={4} className={field} placeholder="Tell us how we can help…" /></label>
          </>}
          <div className="hidden" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
          <p className="text-xs leading-relaxed opacity-80">{newsletter ? 'Send your interest to our team so we can follow up about available insights.' : 'We will use these details to respond to your enquiry. Please avoid including confidential financial information.'}</p>
          <button type="submit" className={`px-7 py-4 text-xs tracking-widest uppercase font-medium transition-colors disabled:cursor-wait ${dark ? 'bg-[#B9FF8A] text-[#0B4A46] hover:bg-[#9EE86A]' : 'bg-[#0B4A46] text-white hover:bg-[#063D3A]'}`}>{status === 'sending' ? 'Sending…' : newsletter ? 'Request insights →' : 'Request a consultation →'}</button>
        </fieldset>
        {status === 'error' && <p role="alert" className="text-sm leading-relaxed">{error} <a href="mailto:mzaki@zakiassociates.com" className="underline">Email mzaki@zakiassociates.com</a></p>}
      </form>}
    </div>
  );
}
