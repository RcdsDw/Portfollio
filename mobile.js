let touchStartX = 0
let touchEndX = 0 


let var1 = "card1"
let var2 = "card2"
let var3 = "card3"

let zone = document.querySelectorAll(".card")

let container = document.querySelector(".container")

container.addEventListener("touchstart", function(e) {
    touchStartX = e.changedTouches[0].screenX
}, false)

container.addEventListener("touchend", function(e) {
    touchEndX = e.changedTouches[0].screenX
    handleZone()
    console.log("handleZone appelée")
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

const cards = document.querySelectorAll('.card')
const backgroundCard =  document.querySelector(".behindCard")
const button = document.querySelector(".button")

cards.forEach(card => {
    card.addEventListener("click", () => {
        
        if (card.classList.contains("active")) {
            card.classList.remove('active')
            card.style.transform = `rotateY(0deg)`
            card.style.zIndex = `0`
            backgroundCard.style.display = "none"
            button.style.display = "none"
        } else {
            card.classList.add('active')
            card.style.transform = `rotateY(360deg) scale(1.7)`
            card.style.zIndex = `11`
            backgroundCard.style.display = "block"
            button.style.display = "block"
        }
    })
})