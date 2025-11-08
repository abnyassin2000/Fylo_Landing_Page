const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav');

menuIcon.addEventListener('click', () => {
  nav.classList.toggle('show');
  menuIcon.textContent = nav.classList.contains('show') ? '✖' : '☰';
});
