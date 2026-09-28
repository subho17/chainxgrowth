/* Coin drifts slightly with the pointer (desktop only) */
(function () {
  const orb = document.querySelector('.orb');
  if (!orb || BW.reduced || !matchMedia('(pointer: fine)').matches) return;
  addEventListener('pointermove', e => {
    const x = (e.clientX / innerWidth - 0.5) * 16, y = (e.clientY / innerHeight - 0.5) * 16;
    orb.style.translate = x + 'px ' + y + 'px';
  }, { passive: true });
})();
