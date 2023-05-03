const cards = document.querySelectorAll('.card')
const body = document.querySelector("body")
const backgroundCard =  document.querySelector(".behindCard")
const button = document.querySelector(".button")

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