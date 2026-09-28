/* Decorative elements injected once: globe pings, marquee clone, map pins, fabric lines */
(function () {
  const { $, rand, make } = BW;
  const globe = document.getElementById('globe-el');
  if (globe) [[30,30],[48,22],[62,40],[22,58],[72,62],[52,68],[85,35]].forEach(p =>
    globe.appendChild(make('ping', { left: p[0] + '%', top: p[1] + '%', animationDelay: rand(0, 1) + 's' })));
  const mq = document.getElementById('mqi'); if (mq) mq.innerHTML += mq.innerHTML;
  $('.grid3 .card').forEach(c => { for (let i = 0; i < 2; i++)
    c.appendChild(make('pin', { right: rand(8, 58) + '%', top: rand(6, 36) + 'px', animationDelay: rand(0, 2) + 's' })); });
  const b1 = document.querySelector('.b1');
  if (b1) for (let k = 0; k < 9; k++)
    b1.appendChild(make('ping', { left: rand(30, 92) + '%', top: rand(20, 88) + '%', animationDelay: rand(0, 2) + 's' }));
  const f = document.querySelector('.fabric');
  if (f) f.insertAdjacentHTML('afterbegin', '<b class="ln" style="top:20%"></b><b class="ln" style="top:50%"></b><b class="ln" style="top:80%"></b>');
})();
