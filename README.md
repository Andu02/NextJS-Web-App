## Description

This repository hosts my learning playground for **Next.js**. It contains two separate websites built to practice modern Next.js patterns, UI composition, and a basic CMS workflow. The goal is **learning**, not production deployment.

This project is meant to be run locally. Useful local routes once the dev server is running:
- **Main site (OpenPosts – blog):** `http://localhost:3000/`
- **Post details:** `http://localhost:3000/post/[id]`
- **Studio (Sanity CMS):** `http://localhost:3000/studio`
- **Alternate site:** `http://localhost:3000/home`

## Key Features
- **Two sites in one Next.js App Router project** using **route groups**: `(root)` for the blog and `(placeholder)` for the second website.  
- **Blog features:** list posts, open a post by dynamic route (`/post/[id]`), basic search component, date formatting, responsive cards.  
- **Sanity CMS integration:** author & post schemas, live Studio at `/studio`, type generation (`sanity typegen`).  
- **Basic auth setup:** NextAuth with a GitHub provider (API route at `/api/auth/[...nextauth]`).  
- **Modern UI stack:** Tailwind CSS v4, shadcn/ui primitives (button, sheet), Radix UI under the hood, small carousel utility, and CSS-based micro-animations.  
- **Clean structure:** components split between shared UI and the landing (“components/new”), utilities in `lib/`, static assets in `public/`.  
- **Type-safe setup:** TypeScript, ESLint, and strict Next.js config.  

## Technologies Used
- **Framework:** Next.js (App Router), React, TypeScript  
- **Styling:** Tailwind CSS v4, tailwindcss-animate, tw-animate-css  
- **UI primitives:** shadcn/ui, Radix UI  
- **Content:** Sanity (Studio at `/studio`, schemas for `author` and `post`)  
- **Auth:** NextAuth (GitHub provider)  
- **Utilities:** clsx, class-variance-authority, lucide-react icons  
- **Build/Tooling:** ESLint, PostCSS, Type Generation for Sanity  

## Preview
<img width="1903" height="923" alt="homepage" src="https://github.com/user-attachments/assets/fc0ecd6e-faee-41ea-98e3-9a0160aea50f" />

## Run locally
```bash
npm install
npm run dev
# open at http://localhost:3000
