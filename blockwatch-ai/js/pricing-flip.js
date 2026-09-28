/* Professional plan flips once when scrolled into view */
(function () {
  const hot = document.querySelector('.plan.hot'); if (!hot || BW.reduced) return;
  new IntersectionObserver((e, o) => {
    if (!e[0].isIntersecting) return;
    setTimeout(() => { hot.classList.add('flip'); setTimeout(() => hot.classList.remove('flip'), 1300); }, 500);
    o.disconnect();
  }, { threshold: 0.6 }).observe(hot);
})();
