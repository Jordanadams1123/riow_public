'use strict'

//setup DOM selection by ID
const playerName = document.getElementById('player-name')
const playerInputErr = document.getElementById('player-input-err')
const scissorsClick = document.getElementById('click-scissors')
const rockClick = document.getElementById('click-rock')
const paperClick = document.getElementById('click-paper')
const rpsOutput = document.getElementById('rps-output')
const playerHistory = document.getElementById('game-history')
const playerOutput = document.getElementById('player-output')
const currentPlayer = document.getElementById('current-player')
const gameReview = document.getElementById('game-review')


//setup player as global variable 
let player

//gets saved game detail from local storage
let gamePlayDetail = getSavedGameDetail()

//get saved game review by player from local storage
let gameReviews = getSavedReviews()

//if index.html is called from detail.html with player id, use this player for 
//current player
const linkedPlayer = location.hash.substring(1)

if (!linkedPlayer) {
    player = ''
} else {
    player = linkedPlayer
    renderPageContent(player, gamePlayDetail, gameReviews, filters)
}

//listens for click on sissors img and if player is poulates 
//calls playGame to start the game
scissorsClick.addEventListener('click', function (e) {
    if (player === '') {
        playerInputErr.textContent = 'HEY!!!! CAN YOU READ? Enter PLAYER NAME TO START'
    } else {
        playGame(player, 'Scissors')
    }
})

//listens for click on power img and if player is poulates 
//calls playGame to start the game
paperClick.addEventListener('click', function (e) {
    if (player === '') {
        playerInputErr.textContent = 'HEY....CAN YOU READ? Enter PLAYER NAME TO START'
    } else {
        playGame(player, 'Paper')
    }
})

//listens for click on rock img and if player is poulates 
//calls playGame to start the game
rockClick.addEventListener('click', function (e) {
    if (player === '') {
        playerInputErr.textContent = 'HEY....CAN YOU READ? Enter PLAYER NAME TO START'
    } else {
        playGame(player, 'Rock')
    }
})

//listens for change to player name input and if player 
//existing will display game detail
playerName.addEventListener('change', function (e) {
    if (e.target.value === '') {
        playerInputErr.textContent = `HEY....CAN YOU READ? Enter PLAYER NAME TO START!`
    } else {
        player = e.target.value.toLowerCase()
        e.target.value = ''
        renderPageContent(player, gamePlayDetail, gameReviews, filters)
    }
})

//clears player input error once user clicks back into the input field
playerName.addEventListener('input', function () {
    playerInputErr.innerHTML = ''
})
