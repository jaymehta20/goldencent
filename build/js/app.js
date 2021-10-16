const topBtn = document.querySelector('.topBtn')
const hamburger = document.querySelector('.hamburger')
const navmob = document.querySelector('#navmob')

const contactBtn = document.querySelector('.navigation__item--contact')
const aboutBtn = document.querySelector('.navigation__item--about')
const journeyBtn = document.querySelector('.navigation__item--journey')
const productsBtn = document.querySelector('.navigation__item--products')

const mobContactBtn = document.querySelector('.navigation__mob__item--contact')
const mobAboutBtn = document.querySelector('.navigation__mob__item--about')
const mobJourneyBtn = document.querySelector('.navigation__mob__item--journey')
const mobProductsBtn = document.querySelector('.navigation__mob__item--products')

const heroProductsBtn = document.querySelector('.productsBtn')

const heroSection = document.getElementById('hero')
const contactSection = document.getElementById('contact')
const aboutSection = document.getElementById('about')
const journeySection = document.getElementById('journey')
const productsSection = document.getElementById('products')

// to visible and invisible the go to top btn
window.addEventListener('scroll', () => {
    if (
        window.scrollY > heroSection.clientHeight
        &&
        !topBtn.classList.contains('visible')
    ) {
        topBtn.classList.add('visible')
    }
    else if (
        window.scrollY < heroSection.clientHeight
        &&
        topBtn.classList.contains('visible')
    ) {
        topBtn.classList.remove('visible')
    }
})

// navigation btn smooth scroll
topBtn.addEventListener('click', () => window.scroll(0, 0))

contactBtn.addEventListener('click', () => window.scroll(0, contactSection.offsetTop))
journeyBtn.addEventListener('click', () => window.scroll(0, journeySection.offsetTop))
aboutBtn.addEventListener('click', () => window.scroll(0, aboutSection.offsetTop))
productsBtn.addEventListener('click', () => window.scroll(0, productsSection.offsetTop))

mobContactBtn.addEventListener('click', () => {
    hamburger.classList.remove('visible')
    navmob.classList.remove('visible')
    window.scroll(0, contactSection.offsetTop)
})
mobJourneyBtn.addEventListener('click', () => {
    hamburger.classList.remove('visible')
    navmob.classList.remove('visible')
    window.scroll(0, journeySection.offsetTop)
})
mobAboutBtn.addEventListener('click', () => {
    hamburger.classList.remove('visible')
    navmob.classList.remove('visible')
    window.scroll(0, aboutSection.offsetTop)
})
mobProductsBtn.addEventListener('click', () => {
    hamburger.classList.remove('visible')
    navmob.classList.remove('visible')
    window.scroll(0, productsSection.offsetTop)
})

heroProductsBtn.addEventListener('click', () => window.scroll(0, productsSection.offsetTop))
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('visible')
    navmob.classList.toggle('visible')
})