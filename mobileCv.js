const cards = document.querySelectorAll('.card')
const backgroundCard =  document.querySelector(".behindCard")

cards.forEach(card => {
    card.addEventListener("click", () => {
        
        if (card.classList.contains("active")) {
            card.classList.remove('active')
            card.style.transform = `rotateY(0deg)`
        } else {
            card.classList.add('active')
            card.style.transform = `rotateY(360deg) scale(1.3)`
            card.style.position = `absolute`
            card.style.top = `2%`
            card.style.left = `21.5%`
        }
    })
})

const menu = document.getElementById("barsMenu")
const list = document.querySelector(".list")
const github = document.getElementById("github")
const linkedin = document.getElementById("linkedin")
const cv = document.getElementById("cv")

menu.addEventListener("click", () => {
    if (!list.classList.contains("visible")) {
    list.classList.add("visible")
    list.style.animation = "appear 1s ease"
    list.style.opacity = "1"
    github.style.cursor = "pointer"
    linkedin.style.cursor = "pointer"
    cv.style.cursor = "pointer"
    } else {
    list.classList.remove("visible")
    list.style.animation = "disappear 1s ease"
    list.style.opacity = "0"
    github.style.cursor = "default"
    linkedin.style.cursor = "default"
    cv.style.cursor = "default"
    }
})