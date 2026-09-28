/* Hero counter: counts up, then ticks slowly */
(function () {
  const el = document.getElementById('cnt'); if (!el || BW.reduced) return;
  let n = 10412; const t0 = performance.now(), fmt = v => v.toLocaleString('en-US');
  (function step(now) {
    const k = Math.min((now - t0) / 1800, 1);
    el.textContent = fmt(Math.round(n * (1 - Math.pow(1 - k, 3))));
    if (k < 1) requestAnimationFrame(step);
    else setInterval(() => { n += Math.ceil(Math.random() * 3); el.textContent = fmt(n); }, 2200);
  })(t0);
})();
