# Blueprint Advisors - Full Project

This repository workspace contains two deployable apps:

- `blueprint-advisors-web` → Next.js public website
- `blueprint-advisors-studio` → Sanity CMS Studio

## Quick Start

### 1) Web App

```bash
cd blueprint-advisors-web
cp .env.example .env.local
npm install
npm run dev
```

### 2) Sanity Studio

```bash
cd ../blueprint-advisors-studio
cp .env.example .env
npm install
npm run dev
```

## Recommended Deployment

- Push both folders into GitHub (single monorepo or separate repos)
- Deploy `blueprint-advisors-web` on Vercel
- Deploy `blueprint-advisors-studio` using `npm run deploy` or host separately
- Configure Sanity webhook to call `/api/revalidate` on the web app

## Build Validation

```bash
cd blueprint-advisors-web && npm run build
cd ../blueprint-advisors-studio && npm run build
```
