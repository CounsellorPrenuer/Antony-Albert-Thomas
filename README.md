# Blueprint Advisors Web

Production-ready Next.js + Tailwind website for **Blueprint Advisors** with fully editable Sanity-backed content.

## Features

- Pages: Home, About, Services, Blog, Contact, Book a Session, Testimonials
- Sanity CMS integration for editable website content
- Blog system and testimonial management from Sanity
- Responsive premium-style UI with brand color `#001F3F`
- Contact + booking forms (email submission ready via SMTP)
- SEO-ready pages with metadata
- Revalidation webhook endpoint for instant live content updates

## Tech Stack

- Next.js (App Router, TypeScript)
- Tailwind CSS
- Sanity Content Lake (project ID: `7ms99gfl`)

## Environment Setup

1. Copy `.env.example` to `.env.local`
2. Fill the values:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=7ms99gfl
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
SANITY_REVALIDATE_SECRET=your-secret

# Optional, only if you need protected content
SANITY_API_READ_TOKEN=

# SMTP config for forms
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
SMTP_FROM=
CONTACT_RECEIVER_EMAIL=
BOOKING_RECEIVER_EMAIL=
```

## Run Locally

```bash
npm install
npm run dev
```

App runs at `http://localhost:3000`.

## Sanity Live Update Flow

1. In Sanity, configure a webhook:
	 - URL: `https://YOUR_DOMAIN/api/revalidate`
	 - Method: `POST`
	 - Header: `x-sanity-secret: YOUR_SANITY_REVALIDATE_SECRET`
	 - Body example:

```json
{
	"tags": ["homePage", "service", "post", "testimonial", "siteSettings"]
}
```

2. Any change in Sanity triggers revalidation and appears on the live site immediately.

## Deployment (GitHub + Vercel)

1. Push this folder to GitHub.
2. Import the repo in Vercel.
3. Add all environment variables from `.env.local` in Vercel Project Settings.
4. Deploy.

## Folder Structure

```text
src/
	app/
		api/
		about/
		blog/
		book-session/
		contact/
		services/
		testimonials/
	components/
		layout/
		sections/
		ui/
	sanity/
		lib/
```

## Notes

- This frontend expects the Studio schemas from the sibling `blueprint-advisors-studio` project.
- If SMTP is not configured, forms still respond but won’t send emails.
