/* Background canvas: drifting blocks joined by faint chain lines */
(function () {
  const cv = document.getElementById('bg'); if (!cv) return;
  const x = cv.getContext('2d'); let W, H, N = [];
  function size() {
    W = cv.width = innerWidth; H = cv.height = innerHeight; N = [];
    for (let i = 0; i < Math.min(60, W / 22); i++)
      N.push({ x: BW.rand(0, W), y: BW.rand(0, H), vx: BW.rand(-.18, .18), vy: BW.rand(-.18, .18), s: BW.rand(2, 6) });
  }
  size(); addEventListener('resize', size);
  (function draw() {
    x.clearRect(0, 0, W, H);
    N.forEach((a, i) => {
      if (!BW.reduced) { a.x += a.vx; a.y += a.vy; if (a.x < 0 || a.x > W) a.vx *= -1; if (a.y < 0 || a.y > H) a.vy *= -1; }
      for (let j = i + 1; j < N.length; j++) {
        const b = N[j], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 150) { x.strokeStyle = 'rgba(247,147,26,' + 0.22 * (1 - d / 150) + ')'; x.beginPath(); x.moveTo(a.x, a.y); x.lineTo(b.x, b.y); x.stroke(); }
      }
      x.fillStyle = 'rgba(247,170,70,.55)'; x.fillRect(a.x, a.y, a.s, a.s);
    });
    if (!BW.reduced) requestAnimationFrame(draw);
  })();
})();
