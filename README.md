# Portfolio Website

**My personal portfolio** — a space to share experiments, projects, and things I'm actively exploring.

[Visit damilareoo.xyz](https://www.damilareoo.xyz)

---

## About

This site is built to be lightweight, iterative, and honest about process — it's not "finished", it's evolving. The goal is to show how I think and build, not just the polished end results.

## Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js | App framework & routing |
| React | Component-based UI |
| Tailwind CSS | Styling |
| TypeScript | Type safety |
| Cloudflare Workers + OpenNext | Hosting & deployment |

## Getting Started

\`\`\`bash
# 1. Clone
git clone https://github.com/damilareoo/Portfolio-Website-V1.0.git
cd Portfolio-Website-V1.0

# 2. Install dependencies
npm install

# 3. Run the dev server
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

\`\`\`
Portfolio-Website-V1.0/
├── app/           # Pages, routing, API routes (OG images)
├── components/    # Reusable UI (hero, navbar, projects, etc.)
├── public/        # Images and static files
└── styles/        # Global CSS
\`\`\`

## Deploy

Hosted on Cloudflare Workers (`portfolio-website-v1-0`) via [OpenNext](https://opennext.js.org/cloudflare). Pushes to `main` build automatically once the repo is connected in Workers Builds.

Workers Builds settings:

- Build command: `npx opennextjs-cloudflare build`
- Deploy command: `npx wrangler deploy`

Manual deploy: `pnpm run deploy`. Local Worker preview: `pnpm run preview`.

---

Built by [Damilare Osofisan](https://www.damilareoo.xyz)
