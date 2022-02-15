// let countelEl = document.getElementById("count-el")
// let saveEl = document.getElementById("save-el")

// let count = 0

// console.log(saveEl)

// function increment() {
//     count += 1
//     countelEl.textContent = count
// }

// function save() {
//     let countStr = count + " - "
//     saveEl.textContent += countStr
//     console.log(count)
//     countelEl.textContent = 0
//     count = 0
// }

let player = {
    name: "Per",
    chips: 145
}
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = []
let hasBlackjack = false
let isAlive = false
let message = ""
let sum = 0


let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard() {
    let randomNumber = Math.floor( Math.random() *13 ) + 1
    if (randomNumber > 10) {
        return 10
    }else if (randomNumber === 1) {
        return 11
    }else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "wanna draw a new card?"
    }else if(sum === 21) {
        message = "you've got blackjack"
        hasBlackjack = true
    }else{
        message = "you are out of the game"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}



