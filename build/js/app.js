const topBtn = document.querySelector('.topBtn')
const hamburger = document.querySelector('.hamburger')
const navmob = document.querySelector('#navmob')
const mobNavItem = document.querySelectorAll('.navigation__mob__item')
const heroSection = document.getElementById('hero')

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

mobNavItem.forEach(navItem => {
    navItem.addEventListener('click', () => {
        hamburger.classList.remove('visible')
        navmob.classList.remove('visible')
    })
})

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('visible')
    navmob.classList.toggle('visible')
})