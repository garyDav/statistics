const icon1 = document.querySelector('.icon-1')
const icon2 = document.querySelector('.icon-2')

icon1.addEventListener('click', e => {
  e.stopPropagation()
  icon2.classList.toggle('view')
  icon1.classList.toggle('hide')
})
icon2.addEventListener('click', e => {
  e.stopPropagation()
  icon2.classList.toggle('view')
  icon1.classList.toggle('hide')
})
