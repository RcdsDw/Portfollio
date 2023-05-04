const cards = document.querySelectorAll('.card')
const body = document.querySelector("body")
const backgroundCard =  document.querySelector(".behindCard")

cards.forEach(card => {
    card.addEventListener("click", () => {
        
        if (card.classList.contains("active")) {
            card.classList.remove('active')
            card.style.transform = `rotateY(0deg)`
        } else {
            card.classList.add('active')
            card.style.transform = `rotateY(360deg) scale(1.3)`
        }
    })
})

const menu = document.getElementById("barsMenu")
const list = document.querySelector(".list")
const github = document.getElementById("github")
const linkedin = document.getElementById("linkedin")
const cv = document.getElementById("cv")
const color = document.getElementById("color")

menu.addEventListener("click", () => {
    if (!list.classList.contains("visible")) {
    menu.classList.remove("fa-bars")
    menu.classList.add("fa-xmark")

    list.classList.add("visible")
    list.style.animation = "appear 1s ease"
    list.style.opacity = "1"
    list.style.transitionProperty = `all`

    github.style.cursor = "pointer"
    linkedin.style.cursor = "pointer"
    cv.style.cursor = "pointer"
    } else {
    menu.classList.remove("fa-xmark")
    menu.classList.add("fa-bars")

    list.classList.remove("visible")
    list.style.animation = "disappear 1s ease"
    list.style.opacity = "0"
    list.style.transitionProperty = `all`

    github.style.cursor = "default"
    linkedin.style.cursor = "default"
    cv.style.cursor = "default"
    }
})

const changeColor = document.querySelector(".fa-droplet")
const colorGitHub = document.querySelector(".fa-github")
const colorLinkedIn = document.querySelector(".fa-linkedin-in")
const colorCv = document.querySelector(".fa-file")

const card1 = document.getElementById("card1")
const card2 = document.getElementById("card2")
const card3 = document.getElementById("card3")
const download = document.getElementById("download")

color.addEventListener("click", () => {
    if (color.classList.contains("purple")) {
        color.classList.remove('purple')

        body.style.background = `radial-gradient(circle, #fec53f, #846d38, #1e1e1e)`
        colorGitHub.style.color = `#fec53f`
        colorLinkedIn.style.color = `#fec53f`
        colorCv.style.color = `#fec53f`
        changeColor.style.color = `#fec53f`
        menu.style.color = `#fec53f`
        download.style.color = `#fec53f`

        card1.children[0].children[0].src = `./assets/card1Y.png`
        card2.children[0].children[0].src = `./assets/card2Y.png`
        card3.children[0].children[0].src = `./assets/card3Y.png`
        
    } else {
        color.classList.add('purple')
        
        body.style.background = `radial-gradient(circle, #963d97, #3b0d36, #1e1e1e)`
        colorGitHub.style.color = `#963d97`
        colorLinkedIn.style.color = `#963d97`
        colorCv.style.color = `#963d97`
        changeColor.style.color = `#963d97`
        menu.style.color = `#963d97`
        download.style.color = `#963d97`

        card1.children[0].children[0].src = `./assets/card1P.png`
        card2.children[0].children[0].src = `./assets/card2P.png`
        card3.children[0].children[0].src = `./assets/card3P.png`
    }
})