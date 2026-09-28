/* Showcase chips: single-select */
(function () {
  const box = document.getElementById('chips'); if (!box) return;
  box.addEventListener('click', e => {
    const c = e.target.closest('.chip'); if (!c) return;
    BW.$('.chip', box).forEach(x => x.classList.remove('on')); c.classList.add('on');
  });
})();
