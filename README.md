# Cleeric Senyo Dey — Portfolio

Personal portfolio site for Cleeric Senyo Dey, Full-Stack Engineer and founder of Declek Technologies.

Built with React 19, Tailwind CSS 3 and Create React App.

## Getting started

```bash
npm install
npm start        # dev server at http://localhost:3000
npm test         # run the test suite
npm run build    # production build in ./build
```

## Editing content

All copy, projects, skills, testimonials and links live in [`src/data/portfolioData.js`](src/data/portfolioData.js). The components only render that data, so most updates don't touch any JSX.

Static assets (profile photo, CV PDF, favicon) live in [`public/`](public/).

## Structure

```
src/
  components/
    PortfolioSite.jsx   # page shell, hash-based section routing, theme
    layout/             # Header, Footer
    sections/           # Hero, Process, About, Skills, Projects, Testimonials, Contact
    common/             # shared pieces (SocialLinks)
  data/portfolioData.js # all site content
```

Each section is reachable at its own URL hash (`/#projects`, `/#contact`, …), so links can be shared and the browser back button works.

## Deployment

`npm run build` outputs a static site to `build/`, which can go on any static host (Netlify, Vercel, GitHub Pages). If the site is served from a sub-path, set `"homepage"` in `package.json`. Asset URLs use `PUBLIC_URL`, so they follow it.
