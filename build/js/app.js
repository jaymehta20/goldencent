const topBtn = document.querySelector('.topBtn')
const contactBtn = document.getElementById('navigation__item--contact')
const aboutBtn = document.getElementById('navigation__item--about')
const journeyBtn = document.getElementById('navigation__item--journey')
const productsNavBtn = document.getElementById('navigation__item--products')
const productsBtn = document.getElementById('productsBtn')
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
productsNavBtn.addEventListener('click', () => window.scroll(0, productsSection.offsetTop))
productsBtn.addEventListener('click', () => window.scroll(0, productsSection.offsetTop))
aboutBtn.addEventListener('click', () => window.scroll(0, aboutSection.offsetTop))