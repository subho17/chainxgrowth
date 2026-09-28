# Blockwatch AI — Bitcoin landing page

Plain HTML, CSS and JavaScript. No build step: open `index.html` in a browser (or serve the folder with any static server).

```
blockwatch-ai/
├── index.html          all sections, in page order
├── assets/favicon.svg
├── css/                one file per section (load order is set in index.html)
│   ├── base.css        tokens (:root colours/fonts), reset, typography, reveal utility
│   ├── background.css  starfield + canvas layer
│   ├── components.css  buttons, focus ring
│   ├── nav.css  hero.css  globe.css  fabric.css  features.css  showcase.css
│   ├── teams.css  method.css  terminal.css  pricing.css  faq.css  footer.css
│   ├── animations.css  all @keyframes
│   └── responsive.css  breakpoints + reduced-motion (keep last)
└── js/                 one small script per behaviour (load order set in index.html)
    utils.js  nav.js  typewriter.js  chips.js  reveal.js  spotlight.js
    counter.js  parallax.js  decor.js  pricing-flip.js  network-bg.js
```

## Customising
- Brand colour: change `--cy` (and `--bl`) in `css/base.css`. The hex `#f7931a` also appears in rgba/glow values across the CSS files.
- Brand name and copy: edit `index.html` (search for "Blockwatch").
- The pricing, FAQ answers and feature claims are placeholder copy. Replace them with statements that are true for your product before launch.
- Keep the "not financial advice" line in the footer and terminal section.
