//=================== button toggle ===================\\
const buttonVisibleBrands = document.querySelector('#brands__toggle--visible')
const buttonShowBrands = document.querySelector('#brands__toggle--hidden')
const parent = document.querySelector('.brands__list')
const screenWidth = window.innerWidth

buttonVisibleBrands.addEventListener('click', function () {
  const elements = parent.querySelectorAll('*')
  elements.forEach((el) => {
    if (window.getComputedStyle(el).display === 'none') {
      el.style.setProperty('display', 'flex')
    }
    buttonShowBrands.style.display = 'flex'
    buttonVisibleBrands.style.display = 'none'
  })
})

buttonShowBrands.addEventListener('click', function () {
  const elements = parent.querySelectorAll('*')
  elements.forEach((el) => {
    if (el.style.display === 'flex') {
      el.style.display = 'none'
    }
    buttonVisibleBrands.style.display = 'flex'
    buttonShowBrands.style.display = 'none'
  })
})

//=================== button devices ===================\\
const buttonVisibleDevices = document.querySelector('#devices__toggle--visible')
const buttonShowDevices = document.querySelector('#devices__toggle--hidden')
const parentDevices = document.querySelector('.devices__list')

buttonVisibleDevices.addEventListener('click', function () {
  const elements = parentDevices.querySelectorAll('*')
  elements.forEach((el) => {
    if (window.getComputedStyle(el).display === 'none') {
      el.style.setProperty('display', 'flex')
    }
    buttonVisibleDevices.style.display = 'none'
    buttonShowDevices.style.display = 'flex'
  })
})

buttonShowDevices.addEventListener('click', function () {
  const elements = parentDevices.querySelectorAll('*')
  elements.forEach((el) => {
    if (el.style.display === 'flex') {
      el.style.display = 'none'
    }
    buttonShowDevices.style.display = 'none'
    buttonVisibleDevices.style.display = 'flex'
  })
})

//=================== button menu ===================\\
const buttonCloseMenu = document.querySelector(
  '.nav-sidebar__button--burger-exit'
)
const buttonOpenMenu = document.querySelector('.icon-button--burger')
const buttonFeedBackClose = document.querySelector(
  '.feedback-sidebar__close-button'
)
const buttonFeedBackOpen = document.querySelectorAll('.feedback__button')
const buttonCallBackClose = document.querySelector(
  '.callback-sidebar__close-button'
)
const buttonCallBackOpen = document.querySelectorAll('.callback__button')

const overlay = document.querySelector('.overlay')

const sidebarFeedback = document.querySelector('.feedback-sidebar')
const sidebarCallback = document.querySelector('.callback-sidebar')
const sidebarMenu = document.querySelector('.nav-sidebar')
const drawerClose = document.querySelectorAll('.drawer__close-button')

// Открытие панели заказа звонка (callback)
buttonCallBackOpen.forEach((btn) => {
  btn.addEventListener('click', function () {
    sidebarCallback.classList.remove('hidden')
    sidebarFeedback.classList.add('hidden')
    overlay.style.display = 'block'
  })
})

// Закрытие панели заказа звонка (callback)
buttonCallBackClose.addEventListener('click', function () {
  sidebarCallback.classList.add('hidden')
  sidebarFeedback.classList.add('hidden')
  overlay.style.display = 'none'
})

// Открытие панели обратной связи (feedback)
buttonFeedBackOpen.forEach((btn) => {
  btn.addEventListener('click', function () {
    sidebarFeedback.classList.remove('hidden')
    // sidebarCallback.style.display = 'none'
    sidebarCallback.classList.add('hidden')
    overlay.style.display = 'block'
  })
})

// Закрытие панели обратной связи (feedback)
buttonFeedBackClose.addEventListener('click', function () {
  sidebarFeedback.classList.add('hidden')
  sidebarCallback.classList.add('hidden')
  overlay.style.display = 'none'
})

// Открытие главного меню (левая панель)
buttonOpenMenu.addEventListener('click', function () {
  sidebarMenu.classList.remove('hidden')
  overlay.style.display = 'block'
})

// Закрытие главного меню (левая панель)
buttonCloseMenu.addEventListener('click', function () {
  sidebarMenu.classList.add('hidden')
  overlay.style.display = 'none'
})

// Закрытие модального окна по кнопке esc
document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    sidebarCallback.classList.add('hidden')
    sidebarFeedback.classList.add('hidden')
    overlay.style.display = 'none'
    if (screenWidth < 1366) {
      sidebarMenu.classList.add('hidden')
    }
  }
})

// Закрытие модального окна по клику вне области
overlay.addEventListener('click', function () {
  sidebarCallback.classList.add('hidden')
  sidebarFeedback.classList.add('hidden')
  overlay.style.display = 'none'
  if (screenWidth < 1366) {
    sidebarMenu.classList.add('hidden')
  }
})

const mainButtonExpend = document.getElementById('main__expand-button')
const mainHidenButton = document.getElementById('main__hiden-button')
const container = document.querySelector('.main__text-wrapper')

mainButtonExpend.addEventListener('click', () => {
  container.classList.toggle('is-open')
  mainButtonExpend.style.display = 'none'
  mainHidenButton.style.display = 'flex'
})

mainHidenButton.addEventListener('click', () => {
  container.classList.toggle('is-open')
  mainButtonExpend.style.display = 'flex'
  mainHidenButton.style.display = 'none'
})
