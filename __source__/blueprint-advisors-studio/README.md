# Blueprint Advisors Sanity Studio

Sanity Studio for managing all Blueprint Advisors website content.

## What is Editable

- Hero Section
- Homepage Content
- About Page
- Services (page + items)
- Testimonials (page + entries)
- Blog (page + posts)
- Contact Details (site settings, contact page, book session page)

## Environment

1. Copy `.env.example` to `.env`
2. Keep the default project ID unless you are migrating:

```bash
SANITY_STUDIO_PROJECT_ID=7ms99gfl
SANITY_STUDIO_DATASET=production
```

## Install & Run

```bash
npm install
npm run dev
```

Studio runs at `http://localhost:3333` by default.

## Deploy Studio

```bash
npm run deploy
```

This publishes your Studio to Sanity-hosted Studio URL.
