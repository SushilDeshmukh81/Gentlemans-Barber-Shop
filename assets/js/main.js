/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Show menu */

if(navToggle){
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-menu')
    })
}

// Hide Menu
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE HEADER STYLES ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('scroll-header')
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
/*=============== SWIPER WORKS ===============*/

const swiperWork = new Swiper('.work__swiper', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 24,
  grabCursor: true,

  pagination: {
    el: '.work__data .swiper-pagination',
    type:'fraction',
  },

  navigation: {
    nextEl: '.work__data .swiper-button-next',
    prevEl: '.work__data .swiper-button-prev',
  },

});

/*=============== SWIPER TESTIMONIAL ===============*/
const swiperTestimonial = new Swiper('.service__swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 56,
  grabCursor: true,

  pagination: {
    el: '.service__swiper .swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.service__swiper .swiper-button-next',
    prevEl: '.service__swiper .swiper-button-prev',
  },
});

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                      : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 58
    const sectionId = current.getAttribute('id')

    const sectionsClass = document.querySelector(
      '.nav__menu a[href*="' + sectionId + '"]'
    )

    if (!sectionsClass) return

    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ) {
      sectionsClass.classList.add('active-link')
    } else {
      sectionsClass.classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive)

/*=============== GSAP ANIMATION ===============*/ 
const reveal = (selector, options = {}) => {
  gsap.from(selector, {
    scrollTrigger: selector,
    opacity:0,
    duration:1,
    y:100,
    delay:.3,
    ease: 'power2.out',
    ...options
  })
}

/* Home animation */
const tl = gsap.timeline({})

/* Home background animation */
tl.to(
  '.home__bg',
  {
    scale:1.08,
    duration:8,
    ease:'power1.inOut',
    repeat:-1,
    yoyo:true,
    transformOrigin:'center center'
  }
)

reveal('.home__logo',{y:0, scale:.3, delay:1.9, ease:'elastic.out(0.8,0.5'})
reveal('.home__title', {delay: 2.2})
reveal('.home__description', {delay:2.5})
reveal('.home__data .button', {delay:2.8})

/* The nav animation only works in the home section */
if(window.scrollY < 100){
  reveal('.nav > *', {delay: 1.6, y: -30})
} else {
  gsap.set('.nav > *', { opacity:1, y:0 })
}

/* About animation */
reveal('.about__data > *', {stagger: .2})
reveal('.about__img', {delay: .9})

const aboutCounter = document.querySelectorAll('.about__counter')
aboutCounter.forEach(el => {
  gsap.from(el, {
    textContent: 0,
    duration:3,
    ease:'power1.out',
    snap:{textContent: 1},
    scrollTrigger : { trigger:el, once: true}
  })
})

/* Work animation */
reveal('.work__data .section__title', {})
reveal('.work__description', {delay: .6})
reveal('.work__data .swiper-pagination', {delay:.9})
reveal('.work__data :is(.swiper-button-prev, .swiper-button-next',{delay:1.2})
reveal('.work__swiper', {delay:.9})

/* Service animation */
reveal('.service__data .section__title', {})
reveal('.service__plan', {delay:.6, stagger: .2})
reveal('.service__swiper',{delay:.9, stagger:.2})

/* Expert animation */
reveal('.expert .section__title', {})
reveal('.expert__description', {delay:.6})
reveal('.expert__card',{delay:.9, stagger:.2})

/* Contact animation */
reveal('.contact__data .section__title', {})
reveal('.contact__description', {delay:.6})
reveal('.contact__data',{delay:.9, y:0, scale:0})
reveal('.contact__map', {delay: .9})
reveal('.contact__card', {delay:1.2, stagger: .2})

/* Footer animation */
reveal('.footer__container', {})