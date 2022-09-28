let homePointsEl = document.getElementById("home-points")
let guestPointsEl = document.getElementById("guest-points")
let homePoints = 0
let guestPoints = 0

function addOneToHome() {
    homePoints ++
    homePointsEl.textContent = homePoints
}

function addTwoToHome() {
    homePoints += 2 
    homePointsEl.textContent = homePoints
}

function addThreeToHome() {
    homePoints += 3 
    homePointsEl.textContent = homePoints
}

function addOneToGuest() {
    guestPoints ++
    guestPointsEl.textContent = guestPoints
}

function addTwoToGuest() {
    guestPoints += 2 
    guestPointsEl.textContent = guestPoints
}

function addThreeToGuest() {
    guestPoints += 3 
    guestPointsEl.textContent = guestPoints
}

let freshGame = document.getElementById("btn")
console.log(freshGame)


function newGame() {
    homePoints = 0
    guestPoints = 0
    homePointsEl.textContent = homePoints
    guestPointsEl.textContent = guestPoints
    
}