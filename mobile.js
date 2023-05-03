const cards = document.querySelectorAll('.card')
const backgroundCard =  document.querySelector(".behindCard")
const button = document.querySelector(".button")
const body = document.querySelector("body")

const menu = document.getElementById("barsMenu")
const list = document.querySelector(".list")
const github = document.getElementById("github")
const linkedin = document.getElementById("linkedin")
const cv = document.getElementById("cv")
const color = document.getElementById("color")

let touchStartX = 0
let touchEndX = 0 

let isCardActive = false

let var1 = "card1"
let var2 = "card2"
let var3 = "card3"

let zone = document.querySelectorAll(".card")

let container = document.querySelector(".container")

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

cards.forEach(card => {
    card.addEventListener("click", () => {
        
        if (card.classList.contains("active")) {
            isCardActive = false

            card.classList.remove('active')
            card.style.transform = `rotateY(0deg)`
            card.style.zIndex = ``
            backgroundCard.style.display = "none"
            button.style.display = "none"
        } else {
            isCardActive = true

            card.classList.add('active')
            card.style.transform = `rotateY(360deg) scale(1.7)`
            card.style.zIndex = `11`
            card.style.transition = `transform 1s`
            backgroundCard.style.display = "block"
            button.style.display = "block"
        }
    })
})

container.addEventListener("touchstart", function(e) {
    touchStartX = e.changedTouches[0].screenX
}, false)

container.addEventListener("touchend", function(e) {
    touchEndX = e.changedTouches[0].screenX
    console.log("handleZone appelée")
    if (isCardActive) {
        return
    }
    else {
        handleZone()
    }
}, false)

function handleZone() {
        if (touchEndX < touchStartX) {
            console.log("Swipe à gauche")
            for (let i = 0; i < zone.length; i++) {
                enoz = zone[i]

                if (enoz.id == "card1") {
                    enoz.setAttribute("id", "card3")
                }
                else if (enoz.id == "card2") {
                    enoz.setAttribute("id", "card1")
                }
                else if (enoz.id == "card3") {
                    enoz.setAttribute("id", "card2")
                }
            }
        }
        if (touchEndX > touchStartX) {
            console.log("Swipe à droite")
            for (let i = 0; i < zone.length; i++) {
                enoz = zone[i]

                if (enoz.id == "card1") {
                    enoz.setAttribute("id", "card2")
                }
                else if (enoz.id == "card2") {
                    enoz.setAttribute("id", "card3")
                }
                else if (enoz.id == "card3") {
                    enoz.setAttribute("id", "card1")
                }
            }
        }
    }

const changeColor = document.querySelector(".fa-droplet")
const colorGitHub = document.querySelector(".fa-github")
const colorLinkedIn = document.querySelector(".fa-linkedin-in")
const colorCv = document.querySelector(".fa-file")

const card1 = document.getElementById("card1")
const card2 = document.getElementById("card2")
const card3 = document.getElementById("card3")

color.addEventListener("click", () => {
    if (color.classList.contains("purple")) {
        color.classList.remove('purple')

        body.style.background = `radial-gradient(circle, #fec53f, #846d38, #1e1e1e)`
        colorGitHub.style.color = `#fec53f`
        colorLinkedIn.style.color = `#fec53f`
        colorCv.style.color = `#fec53f`
        changeColor.style.color = `#fec53f`
        menu.style.color = `#fec53f`

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

        card1.children[0].children[0].src = `./assets/card1P.png`
        card2.children[0].children[0].src = `./assets/card2P.png`
        card3.children[0].children[0].src = `./assets/card3P.png`
    }
})