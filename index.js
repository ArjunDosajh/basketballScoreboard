let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let hScore = 0, gScore = 0

function winner() {
    let win = document.getElementById("winner")
    if(hScore == gScore)
        win.textContent = "Draw"
    else if(hScore > gScore)
        win.textContent = "Home"
    else
        win.textContent = "Guest"
}

function add1home() {
    hScore += 1
    homeScore.textContent = hScore
    winner()
}

function add2home() {
    hScore += 2
    homeScore.textContent = hScore
    winner()
}

function add3home() {
    hScore += 3
    homeScore.textContent = hScore
    winner()
}

function add1guest() {
    gScore += 1
    guestScore.textContent = gScore
    winner()
}

function add2guest() {
    gScore += 2
    guestScore.textContent = gScore
    winner()
}

function add3guest() {
    gScore += 3
    guestScore.textContent = gScore
    winner()
}

function reset() {
    hScore = 0, gScore = 0
    homeScore.textContent = "0", guestScore.textContent = "0"
} 