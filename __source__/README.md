# Blueprint Advisors

Welcome to the Blueprint Advisors codebase. 
This repository contains the Next.js frontend (in the root directory) and the Sanity Studio CMS (in the `blueprint-advisors-studio` directory).

## Quick Start

### Web Frontend (Next.js)

The Next.js frontend is located right here in the root folder.
Install dependencies and run the development server:

```bash
npm install
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

### Sanity Studio CMS

The content management system is located in the `blueprint-advisors-studio` directory.

```bash
cd blueprint-advisors-studio
npm install
npm run dev
```

The studio will be available at [http://localhost:3333](http://localhost:3333).

## Hosting / Deployment

- **Web Frontend**: Connect this repository directly to Vercel, Netlify, or your preferred hosting provider. It will automatically detect the Next.js configuration and deploy the website correctly.
- **Sanity Studio**: You can deploy the studio using `npx sanity deploy` inside the `blueprint-advisors-studio` directory.
