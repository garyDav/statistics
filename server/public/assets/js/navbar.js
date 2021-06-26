const body = document.querySelector('body')
const menu = document.querySelector('.navbar__menu')
const navbarTitle = document.querySelector('.navbar__title')
const navbarInput = document.querySelector('.navbar__input')
const navbarNav = document.querySelector('.navbar__nav')
const navItem = document.querySelectorAll('.navbar__nav--item')
const search = document.querySelector('.navbar__search')
const btnAdd = document.querySelector('.btn_add')
const modal = document.querySelector('.modal')

body.addEventListener('click', _ => {
  body.classList.remove('open')

  modal.classList.remove('open')

  navbarTitle.classList.remove('hide')
  navbarInput.classList.remove('view')

  search.childNodes[0].classList.remove('view')
  search.childNodes[1].classList.remove('hide')
})

menu.addEventListener('click', e => {
  e.stopPropagation()
  navbarNav.classList.toggle('open')
  menu.childNodes[0].classList.toggle('open')
  body.classList.toggle('open')
  navItem.forEach(item => {
    item.classList.toggle('fade')
  })
})
navbarNav.addEventListener('click', e => {
  e.stopPropagation()
})

search.addEventListener('click', e => {
  e.stopPropagation()
  navbarTitle.classList.toggle('hide')
  navbarInput.classList.toggle('view')

  search.childNodes[0].classList.toggle('view')
  search.childNodes[1].classList.toggle('hide')
})
navbarInput.addEventListener('click', e => {
  e.stopPropagation()
})

modal.childNodes[0].addEventListener('click', e => {
  e.stopPropagation()
})
btnAdd.addEventListener('click', e => {
  e.stopPropagation()
  modal.classList.toggle('open')
})
