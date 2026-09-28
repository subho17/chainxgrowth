/* Hero status line: types and erases messages */
(function () {
  const el = document.getElementById('t'); if (!el) return;
  const lines = ['Mempool scanning', 'Blocks reconciled', 'Reading the risk'];
  if (BW.reduced) { el.textContent = lines[0]; return; }
  let i = 0, j = 0, dir = 1;
  (function tick() {
    const s = lines[i]; j += dir; el.textContent = s.slice(0, j);
    if (j >= s.length) { dir = -1; return setTimeout(tick, 1600); }
    if (j <= 0) { dir = 1; i = (i + 1) % lines.length; }
    setTimeout(tick, dir > 0 ? 70 : 35);
  })();
})();
