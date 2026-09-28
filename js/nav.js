/* Sticky nav shadow + mobile menu */
(function () {
  const nav = document.querySelector('nav'), btn = document.querySelector('.menu');
  addEventListener('scroll', () => nav.classList.toggle('sc', scrollY > 20), { passive: true });
  if (!btn) return;
  const set = open => { nav.classList.toggle('open', open); btn.setAttribute('aria-expanded', open); };
  btn.addEventListener('click', () => set(!nav.classList.contains('open')));
  BW.$('.links a').forEach(a => a.addEventListener('click', () => set(false)));
})();
