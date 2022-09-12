const menuIcon = document.querySelector('.hamburger');
const navBar = document.querySelector('.nav-list-menu');
const menuBar = document.querySelector('.nav-menu');
const navMain = document.getElementsByClassName('nav-link');

menuIcon.addEventListener('click', () => {
  menuBar.classList.toggle('active');
  navBar.classList.toggle('change');
  menuIcon.classList.toggle('modify');
});

function close() {
  menuBar.classList.remove('active');
  menuIcon.classList.remove('modify');
  navBar.classList.remove('change');
}

function closeScreen() {
  for (let i = 0; i < navMain.length; i += 1) {
    navMain[i].addEventListener('click', close);
  }
}

menuIcon.addEventListener('click', closeScreen);