'use strict'

const filters = {
    playerText: '',
    byGame: ''
}

const getSavedGameDetail = () => {

    const gamePlayDetailJSON = localStorage.getItem('rps')
    try {
        return gamePlayDetailJSON ?  JSON.parse(gamePlayDetailJSON) : []
    } catch (e){
        return []
    }  
   
}

//Render Game filter results by filtered by Player
const renderSearchDetail = (filterPlayer, filters) => {
    playerOutput.innerHTML = ''
    const filterGame = filterPlayer.filter((detail) => {
        return detail.result.toLowerCase().includes(filter.byGame.toLowerCase()) 
    })

    if(filterGame.length === 0) {
        gameSearch.textContent = 'No Games found'
    } else {
        filterGame.forEach((game) => {
            const gameEntry = document.createElement('p')
            gameEntry.textContent = `Player ${game.player} ${game.result} by selecting ${game.playerChoice}.`
            playerOutput.appendChild(gameEntry)
        })
    }

}

const removeGameEntry = (id) => {
    const gameIndex = gamePlayDetail.findIndex((game) => {
        return game.id === id   
    })
    if(gameIndex > -1) {
        gamePlayDetail.splice(gameIndex, 1)
    }
}

const saveGamePlayDetail = function (gamePlayDetail) {
    localStorage.setItem('rps', JSON.stringify(gamePlayDetail))
}

const generateGameDOM = (game, index) => {
    const gameEl = document.createElement('div')
    const playEntry = document.createElement('p')
    playEntry.textContent = `Game ${index+1}: Player ${game.player} ${game.result} by selecting ${game.playerChoice}.`
    gameEl.appendChild(playEntry)
    const removeGameButton = document.createElement('button')
    removeGameButton.textContent = 'x'
    playEntry.appendChild(removeGameButton)
    removeGameButton.addEventListener('click', () => {
        removeGameEntry(game.id)
        saveGamePlayDetail(gamePlayDetail)
        renderGameDetail(gamePlayDetail, filters, player)  
    })
    const detaillink = document.createElement('a')
    detaillink.setAttribute('href', 'detail.html#' + game.id)

    const showDetailButton = document.createElement('button')
    showDetailButton.textContent = 'details'
    detaillink.appendChild(showDetailButton)
    playEntry.appendChild(detaillink)

    return gameEl

}

const createPlayerHistoryDOM = (filterPlayer, filters, player)=> {
    const div = document.createElement('div')
    
    const h1 = document.createElement('h1')
    h1.textContent = `${player} game play history`
    div.appendChild(h1)
    
    const h2 = document.createElement('h2')
    const totalGames = filterPlayer.length
    const filterWins = filterPlayer.filter((game) => {
        return game.result === 'Win'
    })
    const filterLoss = filterPlayer.filter((game) => {
        return game.result === 'Loss'
    })
    const totalWins = filterWins.length
    const totalLoss = filterLoss.length
    h2.textContent = `Total Games played: ${totalGames} <> Total Wins: ${totalWins} <> Total Loss: ${totalLoss}`
    div.appendChild(h2)
    
    return div
}



//Render Player detail 
const renderGameDetail = (gamePlayDetail, filters, player) => {
    
    const filterPlayer = gamePlayDetail.filter((detail) => {     
        return detail.player === player
    })
    

    if(filterPlayer.length === 0) {
        playerHistory.textContent = 'No player game history found'
    } else {
        playerHistory.innerHTML = ''
        let playerHistoryEl = createPlayerHistoryDOM(filterPlayer, filters, player)
        playerHistory.appendChild(playerHistoryEl)

        filterPlayer.forEach((game, index) => {
            let playEntryEl = generateGameDOM(game, index)
            playerHistory.appendChild(playEntryEl)
        })
        //displayGameFilter(filterPlayer, filter)
    }
} 

const getRandomInterger =  (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const getGameChoice = (choiceInt) => {
    if (choiceInt === 0) {
        return 'Rock'
    } else if (choiceInt === 2) {
        return 'Scissors'
    } else {
        return 'Paper'
    }
}

const updateStore = (player, result, playerChoice, gameChoice) => {
    const id = uuidv4()
    gamePlayDetail.push({ id, player, result, playerChoice, gameChoice })
    localStorage.setItem('rps', JSON.stringify(gamePlayDetail))
}

const getRPSResult = (player, gameChoice, playerChoice) => {
  
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

const playGame = (player, playerChoice) => {
    rpsOutput.innerHTML = ''
    let gameChoice = getGameChoice(getRandomInterger(0, 2))
    let result = getRPSResult(player, gameChoice, playerChoice)
    const h1 = document.createElement('h1')
    h1.textContent = result
    rpsOutput.appendChild(h1)
    renderGameDetail(gamePlayDetail, filters, player)

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
