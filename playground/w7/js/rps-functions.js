
const filter = {
    playerText: '',
    byGame: ''
}

const getSavedGameDetail = function () {
    const gamePlayDetailJSON = localStorage.getItem('rps')
    if (gamePlayDetailJSON !== null) {
       return JSON.parse(gamePlayDetailJSON)
    } else {
        return []
    }
}

//Render Game filter results by filtered by Player
const renderSearchDetail = function(filterPlayer, filter) {
    playerOutput.innerHTML = ''
    const filterGame = filterPlayer.filter(function (detail){
        return detail.result.toLowerCase().includes(filter.byGame.toLowerCase()) 
    })

    if(filterGame.length === 0) {
        gameSearch.textContent = 'No Games found'
    } else {
        filterGame.forEach(function(game){
            const gameEntry = document.createElement('p')
            gameEntry.textContent = `Player ${game.player} ${game.result} by selecting ${game.playerChoice}.`
            playerOutput.appendChild(gameEntry)
        })
    }

}

//Render Player detail 
const renderGameDetail = function(gamePlayDetail, filter, player) {
    
    playerHistory.innerHTML = ''
    const h1 = document.createElement('h1')
    h1.textContent = `${player} game play history`
    playerHistory.appendChild(h1)

    const filterPlayer = gamePlayDetail.filter(function (detail){     
        return detail.player === player
    })
    
    if(filterPlayer.length === 0) {
        playerHistory.textContent = 'No player game history found'
    } else {
        filterPlayer.forEach(function(game, index) {
            const playEntry = document.createElement('p')
            playEntry.textContent = `Game ${index+1}: Player ${game.player} ${game.result} by selecting ${game.playerChoice}.`
            playerHistory.appendChild(playEntry)
        })
        //displayGameFilter(filterPlayer, filter)
    }
} 

const getRandomInterger = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const getGameChoice = function (choiceInt) {
    if (choiceInt === 0) {
        return 'Rock'
    } else if (choiceInt === 2) {
        return 'Scissors'
    } else {
        return 'Paper'
    }
}

const updateStore = function(player, result, playerChoice, gameChoice) {
    const id = uuidv4()
    gamePlayDetail.push({ id, player, result, playerChoice, gameChoice })
    localStorage.setItem('rps', JSON.stringify(gamePlayDetail))
}

const getRPSResult = function (player, gameChoice, playerChoice) {
  
    if (playerChoice === gameChoice) {
        updateStore(player, 'Tie', playerChoice, gameChoice)
        return 'Tie'
    }
    if (playerChoice === 'Rock') {
        if (gameChoice === 'Scissors') {
            updateStore(player, 'Win', playerChoice, gameChoice)
            return 'Rock beats Scissors - Player Wins'
        } else {
            updateStore(player, 'Loss', playerChoice, gameChoice)
            return 'Scissors beats Paper - Game Wins'
        }
    }
    if (playerChoice === 'Paper') {
        if (gameChoice === 'Rock') {
            updateStore(player, 'Win', playerChoice, gameChoice)
            return 'Paper beats Rock - Player Wins'
        } else {
            updateStore(player, 'Loss', playerChoice, gameChoice)
            return 'Scisster cuts Paper - Game Wins'
        }
    }

    if (playerChoice === 'Scissors') {
        if (gameChoice === 'Paper') {
            updateStore(player, 'Win', playerChoice, gameChoice)
            return 'Scissors Cut Paper - Player Wins'
        } else {
            updateStore(player, 'Loss', playerChoice, gameChoice)
            return 'Rock crushes Scissors - Game Wins'
        }
    }
}

const playGame = function (player, playerChoice) {
    rpsOutput.innerHTML = ''
    let gameChoice = getGameChoice(getRandomInterger(0, 2))
    let result = getRPSResult(player, gameChoice, playerChoice)
    const h1 = document.createElement('h1')
    h1.textContent = result
    rpsOutput.appendChild(h1)
    renderGameDetail(gamePlayDetail, filter, player)

}


//Setup my querySelectors once, saves time, coding
//const playerInput = document.querySelector('#select-player')
//const playerOutput = document.querySelector('#player-output')
//const gameSearch = document.querySelector('#game-search')

//Eventlistener for user input on player 
// playerInput.addEventListener('change', function(e){
//     console.log('listening')
//     filter.playerText = e.target.value
//     renderPlayerDetail(gamePlayDetail, filter)
//     e.target.value = ''
// })

//Filter by game after filter by player is done rendering
//Building input dynamically. 
// const displayGameFilter = function(filterPlayer, filter) {

//     const gameFilter = document.createElement('input')
//     gameFilter.setAttribute('id', 'game-filter')
//     gameFilter.setAttribute('placeholder', 'Tie, Win or Loss')
//     gameSearch.appendChild(gameFilter)
//     gameSearch.addEventListener('change', function (e){
//         filter.byGame = e.target.value
//         renderSearchDetail(filterPlayer, filter)
//         e.target.value = ''
//     })
    
// }
