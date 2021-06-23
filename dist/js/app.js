const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav');
const menuLink = document.querySelectorAll('.menu-link')
menu.addEventListener('click', () => {
  if (navMenu.classList.contains('show-nav')) {
    navMenu.classList.remove('show-nav')
  } else {
    navMenu.classList.add('show-nav')
  }
})

menuLink.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show-nav')
  })
})