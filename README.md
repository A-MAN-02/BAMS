# Manufacture — React Version

Original static site (HTML + CSS + vanilla JS) converted to React (Vite),
split section-by-section into components.

## Structure

```
manufacture-react/
├── index.html                # Vite HTML shell (just a <div id="root">)
├── package.json
├── vite.config.js
├── public/
│   └── assets/                # put logo.png, bg-image.jpg, your-video.mp4,
│                               # PCB.jpg, NPI.jpg, box_.jpeg, Test.jpg,
│                               # Turnkey.jpg, Supply.jpg, intro-facility.jpeg,
│                               # cert-iso-9001.png, cert-iso-13485.png,
│                               # cert-iso-14001.png, cert-iatf-16949.png here
└── src/
    ├── main.jsx                # React entry point, imports index.css
    ├── App.jsx                 # Imports & renders every section, in order
    ├── index.css                # Your original style.css, unchanged
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx             # GSAP scroll-pin animation
    │   ├── Intro.jsx            # "Who We Are" + process rail
    │   ├── Capabilities.jsx     # Capability cards grid
    │   ├── TechnicalStats.jsx   # Stat counters
    │   └── Quality.jsx          # Certifications panel
    └── hooks/
        ├── useNavbarScroll.js   # navbar blur/hide-on-scroll logic
        └── useScrollReveal.js   # IntersectionObserver reveal-on-scroll
```

## How to run

1. **Copy your image/video assets** into `public/assets/` (same filenames
   used in your original HTML — logo.png, bg-image.jpg, your-video.mp4, etc.).
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
   Open the printed local URL (usually http://localhost:5173).
4. Build for production when ready:
   ```bash
   npm run build
   ```
   Output goes to `dist/`.

## What changed vs. the original

- All DOM manipulation (`getElementById`, `classList.add/remove`,
  `addEventListener`) was replaced with React state, refs, and `useEffect`.
- Mobile menu open/close, Escape-to-close, and resize-to-close now live in
  `Navbar.jsx` as component state instead of global functions.
- The navbar scroll blur/hide effect is its own hook (`useNavbarScroll`) so
  it can be reused or tested independently of the markup.
- The `IntersectionObserver` reveal-on-scroll (previously for
  `.intro__reveal` / `.quality__reveal`) is now a reusable hook
  (`useScrollReveal`) used inside `Intro.jsx` and `Quality.jsx`.
- The GSAP hero pin/zoom/blur timeline is set up inside `Hero.jsx` with
  `gsap.context()` so it's properly created and cleaned up as the component
  mounts/unmounts (important for React StrictMode / hot reload).
- Asset paths were changed from `./assets/...` to `/assets/...` because
  Vite serves the `public/` folder from the site root.
- `style.css` was copied over as-is into `src/index.css` — no visual
  changes, just imported once in `main.jsx` so it applies globally.

## Notes

- GSAP is now an npm dependency instead of two `<script>` CDN tags, and is
  imported directly in `Hero.jsx`.
- Each section is a fully independent component — you can reorder, remove,
  or reuse any of them by editing `App.jsx`.
