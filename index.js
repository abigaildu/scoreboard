let homeScore = document.getElementById("hscore-el")
let awayScore = document.getElementById("ascore-el")
let hScore = 0
let aScore = 0

function hPlusOne() {
    hScore += 1
    homeScore.textContent = hScore
}

function aPlusOne() {
    aScore += 1
    awayScore.textContent = aScore
}

function hPlusTwo() {
    hScore += 2
    homeScore.textContent = hScore
}

function aPlusTwo() {
    aScore += 2
    awayScore.textContent = aScore
}

function hPlusThree() {
    hScore += 3
    homeScore.textContent = hScore
}

function aPlusThree() {
    aScore += 2
    awayScore.textContent = aScore
}