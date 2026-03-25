# Admin CMS Setup (Hardened)

This project now supports admin editing for Experience and Projects without a database.

The admin UI is available at `/admin/` and edits these files:
- `content/experience.json`
- `content/projects.json`

## Security Model

Decap CMS uses your Git provider authentication. There is no database user table in this setup. Security depends on your GitHub account and repository settings.

## 1) Configure Decap CMS Backend

Update `admin/config.yml`:
- `backend.repo`: already set to `JackKarak/PersonalSite`
- `backend.base_url`: set to your Vercel project URL
- `site_url`: already set to `https://jackkarak.github.io/PersonalSite/`

For this repo, the auth broker is now wired for Vercel using:
- `api/begin.js`
- `api/complete.js`

Set these values in `admin/config.yml`:
- `base_url: https://YOUR-VERCEL-PROJECT.vercel.app`
- `auth_endpoint: /api/begin`

`site_url` stays your GitHub Pages URL.

## 1.1) Create GitHub OAuth App

In GitHub:
- Go to Settings -> Developer settings -> OAuth Apps -> New OAuth App
- Homepage URL: `https://YOUR-VERCEL-PROJECT.vercel.app`
- Authorization callback URL: `https://YOUR-VERCEL-PROJECT.vercel.app/api/complete`
- Save and copy Client ID + Client Secret

## 1.2) Add Vercel Environment Variables

In Vercel project settings, add:
- `NODE_ENV=production`
- `OAUTH_PROVIDER=github`
- `OAUTH_CLIENT_ID=<your client id>`
- `OAUTH_CLIENT_SECRET=<your client secret>`
- `ORIGIN=https://jackkarak.github.io`
- `COMPLETE_URL=https://YOUR-VERCEL-PROJECT.vercel.app/api/complete`

Reference file: `.env.vercel.example`

## 1.3) Deploy Auth Endpoint to Vercel

- Import this repository into Vercel
- Deploy (default settings are fine)
- Confirm these URLs return responses:
	- `https://YOUR-VERCEL-PROJECT.vercel.app/api/begin`
	- `https://YOUR-VERCEL-PROJECT.vercel.app/api/complete`

## 2) Enforce MFA and Account Hardening

In GitHub account security:
- Require MFA (prefer passkeys)
- Use a unique password
- Remove unused OAuth apps and tokens
- Enable login alerts

## 3) Minimal Scope Access

For GitHub OAuth app/token setup:
- Grant only the repository access needed for this site
- Avoid broad classic tokens where possible
- Use fine-grained credentials where supported by your auth broker

## 4) Branch Protection (Recommended)

Set branch protection on `main`:
- Require pull requests
- Require at least 1 approval
- Require status checks before merge
- Restrict force push and branch deletion

Recommended status checks:
- Lint workflow (HTML + CSS)
- Optional accessibility workflow

This works with `publish_mode: editorial_workflow` in Decap, which creates reviewable content PRs.

## 5) Restrict Admin Surface

- Keep `/admin/` unlinked from your main nav
- Keep `noindex,nofollow` (already set in `admin/index.html`)
- Optionally add a basic allowlist at CDN or reverse proxy level for `/admin/*`

## 6) Local Testing

Run:

```bash
npx decap-server
npm run serve:test
```

Then open:
- `http://127.0.0.1:4173/admin/`

`local_backend: true` is already enabled for local development.

For production testing after Vercel deploy:
- Open `https://jackkarak.github.io/PersonalSite/admin/`
- Log in with GitHub
- Make a content edit and publish
- Verify a PR is opened to `main`

## 7) Operational Safety

- Review every CMS PR before merge
- Keep dependency updates current
- Audit new collaborators quarterly
- Back up `content/*.json` through repository history and tags
