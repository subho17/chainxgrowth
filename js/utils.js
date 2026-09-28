/* Shared helpers, exposed as window.BW */
window.BW = {
  reduced: matchMedia('(prefers-reduced-motion: reduce)').matches,
  $: (q, root) => [].slice.call((root || document).querySelectorAll(q)),
  rand: (a, b) => a + Math.random() * (b - a),
  make(cls, style) { const el = document.createElement('i'); el.className = cls; Object.assign(el.style, style || {}); return el; }
};
