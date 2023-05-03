const cards = document.querySelectorAll('.card')
const backgroundCard =  document.querySelector(".behindCard")
const button = document.querySelector(".button")

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
let card1 = document.getElementById("card1")

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

    card1.addEventListener("click", () => {
        
        if (card1.classList.contains("active")) {
            isCardActive = false

            card1.classList.remove('active')
            card1.style.transform = `rotateY(0deg)`
            card1.style.zIndex = `0`
            backgroundCard.style.display = "none"
            button.style.display = "none"
        } else {
            isCardActive = true

            card1.classList.add('active')
            card1.style.transform = `rotateY(360deg) scale(1.7)`
            card1.style.zIndex = `11`
            card1.style.transition = `transform 1s`
            backgroundCard.style.display = "block"
            button.style.display = "block"
        }
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