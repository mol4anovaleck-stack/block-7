import '../css/swiper-bundle.min.css'
import '../scss/style.scss'

import './buttons'
import Swiper from './swiper-bundle.min.js'

let swiper1
let swiper2
let swiper3

function initSwiper() {
  const screenWidth = window.innerWidth

  if (screenWidth < 769) {
    // Инициализируем первый
    if (!swiper1) {
      swiper1 = new Swiper('.swiper1', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        slidesOffsetBefore: 16,
        slidesOffsetAfter: 16,
        pagination: { el: '.swiper-pagination1', clickable: true }
      })
    }
    // Инициализируем второй
    if (!swiper2) {
      swiper2 = new Swiper('.swiper2', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        slidesOffsetBefore: 16,
        slidesOffsetAfter: 16,
        pagination: { el: '.swiper-pagination2', clickable: true }
      })
    }
    // Инициализируем третий
    if (!swiper3) {
      swiper3 = new Swiper('.swiper3', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        slidesOffsetBefore: 16,
        slidesOffsetAfter: 16,
        pagination: { el: '.swiper-pagination3', clickable: true }
      })
    }
  } else {
    // Если экран большой — уничтожаем все
    if (swiper1) {
      swiper1.destroy(true, true)
      swiper1 = null
    }
    if (swiper2) {
      swiper2.destroy(true, true)
      swiper2 = null
    }
    if (swiper3) {
      swiper3.destroy(true, true)
      swiper3 = null
    }
  }
}

window.addEventListener('resize', initSwiper)
initSwiper()
