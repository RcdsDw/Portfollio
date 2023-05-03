const cards = document.querySelectorAll('.card')
const body = document.querySelector("body")
const backgroundCard =  document.querySelector(".behindCard")
const button = document.querySelector(".button")

const changeColor = document.querySelector(".fa-droplet")
const colorGitHub = document.querySelector(".fa-github")
const colorLinkedIn = document.querySelector(".fa-linkedin-in")
const colorCv = document.querySelector(".fa-file")

const card1 = document.getElementById("card1")
const card2 = document.getElementById("card2")
const card3 = document.getElementById("card3")

const color = document.getElementById("color")

cards.forEach(card => {
    card.addEventListener("mousemove", e => {
        const glow = card.children[0].children[1]

        let cardRect = card.getBoundingClientRect();
        let x = e.clientX - cardRect.x
        let y = e.clientY - cardRect.y
      
        let midCardWidth = cardRect.width / 2
        let midCardHeight = cardRect.height / 2
      
        let angleY = -(x - midCardWidth) / 8
        let angleX = -(y - midCardHeight) / 8

        let glowX = x / cardRect.width * 100
        let glowY = y / cardRect.height * 100
      
        if (!card.classList.contains("active")) {
            card.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`
            card.children[0].style.boxShadow = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`
            
            glow.style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgb(255, 255, 255, 1), rgb(184, 196, 211, 0.1), transparent)`
        } else {
            card.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`
            card.children[0].style.boxShadow = `rotateX(${angleX}deg) rotateY(${angleY}deg)`
            
            glow.style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgb(255, 255, 255, 1), rgb(184, 196, 211, 0.1),  transparent)`
        }
    })

    card.addEventListener("mouseleave", () => {
        const glow = card.children[0].children[1]

        card.children[0].style.transform = `rotateX(0deg) rotateY(0deg)`
        glow.style.background = `none`
    })
})


cards.forEach(card => {
    card.addEventListener("click", () => {
        
        if (card.classList.contains("active")) {
            card.classList.remove('active')
            card.style.transform = `rotateY(0deg)`
            card.style.position = `initial`
            card.style.zIndex = `0`
            card.style.position = `initial`
            backgroundCard.style.display = "none"
            button.style.display = "none"
        } else {
            card.classList.add('active')
            card.style.transform = `rotateY(360deg) scale(1.7)`
            card.style.position = `absolute`
            card.style.top = `17%`
            card.style.left = `40%`
            card.style.zIndex = `11`
            backgroundCard.style.display = "block"
            button.style.display = "block"
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
    menu.classList.remove("fa-bars")
    menu.classList.add("fa-xmark")

    list.classList.add("visible")
    list.style.animation = "appear 1s ease"
    list.style.opacity = "1"
    list.style.transitionProperty = `all`

    github.style.cursor = "pointer"
    linkedin.style.cursor = "pointer"
    cv.style.cursor = "pointer"
    color.style.cursor = "pointer"
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
    color.style.cursor = "default"
    }
})

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