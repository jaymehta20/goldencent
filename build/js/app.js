const topBtn = document.querySelector('.topBtn')

window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight * 3 / 4 && !topBtn.classList.contains('visible')) {
        topBtn.classList.add('visible')
    }
    else if (window.scrollY < window.innerHeight * 3 / 4 && topBtn.classList.contains('visible')) {
        topBtn.classList.remove('visible')
    }
})

topBtn.addEventListener('click', () => {
    window.scroll(0, 0)
})