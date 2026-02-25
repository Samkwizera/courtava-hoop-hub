# Courtava — Find Courts, Games & Your Basketball Community

Courtava connects basketball players to nearby courts and pickup games. This repository hosts the **landing / waitlist page** for the Courtava platform.

> 🏀 **Live site:** [courtava.com](https://courtava.com) &nbsp;|&nbsp; 📸 **Instagram:** [@trycourtava](https://www.instagram.com/trycourtava/) &nbsp;|&nbsp; ✉️ courtavaai@gmail.com

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React 18](https://react.dev) + [TypeScript](https://www.typescriptlang.org/) |
| Build tool | [Vite 5](https://vitejs.dev/) |
| Styling | [Tailwind CSS v3](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Routing | [React Router v6](https://reactrouter.com/) |
| Forms / API | [Typeform](https://www.typeform.com/) (waitlist) |

---

## Local Development

**Prerequisites:** Node.js ≥ 18 and npm (or bun).

```sh
# 1. Clone the repo
git clone https://github.com/Samkwizera/courtava-hoop-hub.git
cd courtava-hoop-hub

# 2. Install dependencies
npm install

# 3. Start the dev server (http://localhost:8080)
npm run dev
```

Other useful commands:

```sh
npm run build      # Production build → dist/
npm run preview    # Preview the production build locally
npm run lint       # Run ESLint
npm run test       # Run unit tests (Vitest)
```

---

## Deployment

### Cloudflare Pages (recommended)

1. Push this repo to GitHub.
2. In the [Cloudflare Dashboard](https://dash.cloudflare.com/), go to **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the `courtava-hoop-hub` repository.
4. Set the following build settings:

   | Setting | Value |
   |---|---|
   | Framework preset | None (or Vite) |
   | Build command | `npm run build` |
   | Build output directory | `dist` |

5. Click **Save and Deploy**. Cloudflare will build and deploy automatically on every push to `main`.

> The `public/_redirects` file is already configured to handle SPA (client-side) routing — no extra setup needed.

---

### GitHub Pages

1. Install the deploy helper:
   ```sh
   npm install --save-dev gh-pages
   ```
2. Add these scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Deploy:
   ```sh
   npm run deploy
   ```
4. In the GitHub repo settings → **Pages**, set the source to the `gh-pages` branch.

> The `public/404.html` redirect trick is already included to support direct URL access and page refreshes with client-side routing.

---

## Project Structure

```
courtava-hoop-hub/
├── public/             # Static assets (favicon, robots.txt, _redirects, 404.html)
├── src/
│   ├── assets/         # Images (logo, hero background)
│   ├── components/     # Page sections & shadcn/ui components
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── EarlyAccessForm.tsx
│   │   ├── SocialProof.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── ui/         # shadcn/ui primitives
│   ├── pages/
│   │   ├── Index.tsx   # Main landing page
│   │   └── NotFound.tsx
│   └── main.tsx        # App entry point
├── vite.config.ts
├── tailwind.config.ts
└── index.html
```

---

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

---

© 2025 Courtava. All rights reserved.
