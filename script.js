// Sirf Menu ke liye
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('show'));
});

// Dots ko active karna - bas itna hi, koi scroll rokna nahi
const sections = document.querySelectorAll('section');
const dots = document.querySelectorAll('.dot');

window.addEventListener('scroll', () => {
  sections.forEach((sec, i) => {
    let r = sec.getBoundingClientRect();
    if (r.top < window.innerHeight / 2 && r.bottom > window.innerHeight / 2) {
      dots.forEach(d => d.classList.remove('active'));
      if (dots[i]) dots[i].classList.add('active');
    }
  });
});