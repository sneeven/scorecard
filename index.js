let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

let homeScoreValue = 0
let guestScoreValue = 0

function homescoreaddone() {
    homeScoreValue += 1
    homeScoreEl.textContent = homeScoreValue
}

function homescoreaddtwo() {
    homeScoreValue += 2
    homeScoreEl.textContent = homeScoreValue
}

function homescoreaddthree() {
    homeScoreValue += 3
    homeScoreEl.textContent = homeScoreValue
}

function guestscoreaddone() {
    guestScoreValue += 1
    guestScoreEl.textContent = guestScoreValue
}

function guestscoreaddtwo() {
    guestScoreValue += 2
    guestScoreEl.textContent = guestScoreValue
}

function guestscoreaddthree() {
    guestScoreValue += 3
    guestScoreEl.textContent = guestScoreValue
}

function resetgame() {
    guestScoreValue = 0
    homeScoreValue = 0
    guestScoreEl.textContent = guestScoreValue
    homeScoreEl.textContent = homeScoreValue
}
