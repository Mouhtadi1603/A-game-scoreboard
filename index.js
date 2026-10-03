let homeDisplay = document.getElementById("hmDisplay")
let guestDisplay = document.getElementById("gesDisplay")
let count = 0
let count2 = 0

function add1() {
    count += 1
    homeDisplay.textContent = count
}

function add2() {
    count += 2
    homeDisplay.textContent = count
}

function add3() {
    count += 3
    homeDisplay.textContent = count
}

function secondAdd1() {
    count2 += 1
    guestDisplay.textContent = count2
}

function secondAdd2() {
    count2 += 2
    guestDisplay.textContent = count2
}

function secondAdd3() {
    count2 += 3
    guestDisplay.textContent = count2
}