'use strict'

const filters = {
    playerText: '',
    byGame: ''
}

//get data from local storage for game reviews
const getSavedReviews = () => {
    const gameReviewsJSON = localStorage.getItem('rps-review')
    try {
        return gameReviewsJSON ?  JSON.parse(gameReviewsJSON) : []
    } catch (e){
        return []
    }  
   
}
 
//get data from local storage from game play details
const getSavedGameDetail = () => {

    const gamePlayDetailJSON = localStorage.getItem('rps')
    try {
        return gamePlayDetailJSON ?  JSON.parse(gamePlayDetailJSON) : []
    } catch (e){
        return []
    }  
   
}
//create DOM for player review
const createReviewDOM = (linktext) => {
    gameReview.innerHTML = ''
    const a = document.createElement('a')
    const p = document.createElement('p')
    a.setAttribute('href', 'review.html#'+ player)
    p.textContent = linktext
    a.appendChild(p)
    return a

}

const showPlayerReview = (player, gameReviews ) => {
    //search for player review
    const review = gameReviews.find((review) => review.player === player)
    let el
    if (!review) {
        //built DOM to ask for review
        console.log('no review')
        el = createReviewDOM('Like us?')
    
    } else {
        //built DOM to thank for review
        el = createReviewDOM('Thanks for your review')    
    }
    
    gameReview.appendChild(el)
}


//remove game detail entry by id
const removeGameEntry = (id) => {
    const gameIndex = gamePlayDetail.findIndex((game) => {
        return game.id === id   
    })
    if(gameIndex > -1) {
        gamePlayDetail.splice(gameIndex, 1)
    }
}

//save chagnes to local storage
const saveGamePlayDetail = (gamePlayDetail) => {
    localStorage.setItem('rps', JSON.stringify(gamePlayDetail))
}

const saveGameReview = (gameReviews) => {
    localStorage.setItem('rps-review', JSON.stringify(gameReviews))
}

//generate game play detail DOM element
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

//Create Player History DOM by filtering for statistics
const createPlayerHistoryDOM = (filterPlayer, filters, player)=> {
    const div = document.createElement('div')
    const h1 = document.createElement('h1')
    h1.textContent = `${player} game play history`
    div.appendChild(h1)

    const h2 = document.createElement('h2')
    const totalGames = filterPlayer.length
    const filterWins = filterPlayer.filter((game) => game.result === 'Win')
    const filterLoss = filterPlayer.filter((game) => game.result === 'Loss')
    const totalWins = filterWins.length
    const totalLoss = filterLoss.length
    h2.textContent = `Total Games played: ${totalGames} <> Total Wins: ${totalWins} <> Total Loss: ${totalLoss}`
    div.appendChild(h2)
    return div
}


//Render Player detail 
const renderGameDetail = (gamePlayDetail, filters, player) => {
    
    const filterPlayer = gamePlayDetail.filter((detail) => detail.player === player)

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

//get random interger based on min and max
const getRandomInterger =  (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
//taken in integer and return string game choice
const getGameChoice = (choiceInt) => {
    if (choiceInt === 0) {
        return 'Rock'
    } else if (choiceInt === 2) {
        return 'Scissors'
    } else {
        return 'Paper'
    }
}

//Update local storage adding uuid into detail
const updateStore = (player, result, playerChoice, gameChoice) => {
    const timestamp = moment().valueOf()
    const id = uuidv4()
    gamePlayDetail.push({ id, player, result, playerChoice, gameChoice, timestamp })
    localStorage.setItem('rps', JSON.stringify(gamePlayDetail))
}
//get the result from playing RPS
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


//Plays the game by determining game Choice and then get RPS result and render game detail
const playGame = (player, playerChoice) => {
    rpsOutput.innerHTML = ''
    let gameChoice = getGameChoice(getRandomInterger(0, 2))
    let result = getRPSResult(player, gameChoice, playerChoice)
    const h1 = document.createElement('h1')
    h1.textContent = result
    rpsOutput.appendChild(h1)
    renderGameDetail(gamePlayDetail, filters, player)
}

//Render Page Content for index with has and first load
const renderPageContent = (player, gamePlayDetail, gameReviews, filters) => {
    currentPlayer.innerHTML = ''
    const h2 = document.createElement('h2')
    h2.textContent = `${player} is now playing`
    currentPlayer.appendChild(h2)
    showPlayerReview(player, gameReviews)
    renderGameDetail(gamePlayDetail, filters, player)
}
