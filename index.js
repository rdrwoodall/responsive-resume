toggler = document.querySelector('i.toggler');
nav = document.querySelector('nav');

toggler.addEventListener('click', (event) => {
  nav.classList.toggle('clicked');
});
