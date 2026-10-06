# M. Zaki & Associates

React, TypeScript, Tailwind CSS and Vite website, configured for Vercel.

## Local development

Use Node.js 22.12 or later and pnpm 10.34.3.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

The frontend runs at http://localhost:8443. For the serverless enquiry endpoint locally, use `vercel dev` with the environment settings below. Plain Vite serves only the frontend, so form submission will show the email fallback there.

## Checks

```sh
pnpm test
pnpm build
```

The tests mock the email provider; they do not send real messages. Production builds include TypeScript checks.

## Deploy to Vercel

1. Push the repository to GitHub and import it in Vercel.
2. Select the Vite framework and Node.js 22.x or 24.x. The included `vercel.json` sets installation, build, output and client-side routing.
3. Set `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` in Vercel's environment settings. The sender must use a domain verified in your Resend account. Keep both variables server-side; do not prefix them with `VITE_`.
4. Deploy. Refresh `/about`, `/services`, and `/team/zaki` to check deep links.
5. Submit an enquiry and check that it arrives at `mzaki@zakiassociates.com`. Test a failure as well before launching.

The enquiry endpoint validates inputs and includes a honeypot. Configure Vercel Firewall rate limiting for `/api/enquiry` before opening a high-traffic campaign. No visitor data is logged by the endpoint.

Consultation forms forward enquiries via Resend. The insights form forwards a request to the same team; it is not an automated newsletter subscription system. Without the two email settings, submissions display an honest unavailable message and direct email link.

## Content

Existing company details, staff biographies, credentials and contact numbers were preserved from the supplied design. Verify their accuracy before launch. Existing Unsplash photographs are illustrative and should be replaced with approved company and team photography if appropriate.

Page content is in `src/pages`. Shared navigation, enquiry forms and effects are in `src/components`. Form handling is in `api/enquiry.mjs`. Animations respect reduced-motion preferences.

## About page content sources

The About page and three team biographies were updated from the firm's published pages on 6 October 2026:

- https://zakiassociates.com/about/
- https://zakiassociates.com/team/mohammed-zaki/
- https://zakiassociates.com/team/m-javed-alam-siddiqi/
- https://zakiassociates.com/team/asad-ali-mulji/

Team information is maintained in `src/data/team.ts`. Portraits are the three files supplied in `src/assets`; their assignments match the published profile image filenames. Unsubstantiated placeholder team members, credentials, founder quotes and the firm timeline were removed.
