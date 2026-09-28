/* Scroll reveal with small stagger */
(function () {
  const sel = 'section h2, section .lead, section .tag, .show, .node, .card, .plan, .perks, details, .steps';
  BW.$(sel).forEach(e => {
    e.classList.add('rv');
    const i = [].indexOf.call(e.parentNode.children, e);
    e.style.setProperty('--d', Math.min(i, 6) * 0.09 + 's');
  });
  const io = new IntersectionObserver(list => list.forEach(x => {
    if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); }
  }), { threshold: 0.15 });
  BW.$('.rv').forEach(e => io.observe(e));
})();
