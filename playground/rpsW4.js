
//Rock, Scissors, Paper (RPS) Game by Rio Waller
//I've been playing with the RPS game in my machine learning studies and I'm using 
//it here to give my CIT93 students example code for this weekly work and developIT1 
//This code run from the bottom up and in it's current state it randomly selector the 
//player the game RPS selection.  
//This version was refactored to use arrays for capturing each game plaed and objects for player data.
//I've decided to not use object methods because my code seems a bit wordy. I've also 
//changed the way the game plays to select between 1 and 10 times to play and each time is plays
//it selects 1 of 3 players. 


//Player 1 Object
const player_1 = {
    id: 1,
    name: 'Rio Waller',
    email: 'riowaller@gmail.com'
}

//Player 2 Object 
const player_2 = {
    id: 2,
    name: 'Jan Student',
    email: 'student@gmail.com'
}

//Player 3 Object
const player_3 = {
    id: 3,
    name: 'Jack Doe',
    email: 'Jack.Doe@gmail'
}

//This will be an array of object for each game play
const gamePlayDetail = []

//RPS Game Play Object

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

const getRPSResult = function (player, gameChoice, playerChoice) {
    if (playerChoice === gameChoice) {
        gamePlayDetail.push({ player: player.id, result: 'Tie', playerChoice, gameChoice })
        return 'Tie'
    }
    if (playerChoice === 'Rock') {
        if (gameChoice === 'Scissors') {
            gamePlayDetail.push({ player: player.id, result: 'Win', playerChoice, gameChoice })
            return 'Rock beats Scissors - Player Wins'
        } else {
            gamePlayDetail.push({ player: player.id, result: 'Loss', playerChoice, gameChoice })
            return 'Scissors beats Paper - Game Wins'
        }
    }
    if (playerChoice === 'Paper') {
        if (gameChoice === 'Rock') {
            gamePlayDetail.push({ player: player.id, result: 'Win', playerChoice, gameChoice })
            return 'Paper beats Rock - Player Wins'
        } else {
            gamePlayDetail.push({ player: player.id, result: 'Loss', playerChoice, gameChoice })
            return 'Scisster cuts Paper - Game Wins'
        }
    }

    if (playerChoice === 'Scissors') {
        if (gameChoice === 'Paper') {
            gamePlayDetail.push({ player: player.id, result: 'Win', playerChoice, gameChoice })
            return 'Scissors Cut Paper - Player Wins'
        } else {
            gamePlayDetail.push({ player: player.id, result: 'Loss', playerChoice, gameChoice })
            return 'Rock crushess Scissors - Game Wins'
        }
    }
}

//This function get a determines the gameChoice and the playChoice by calling the getGameSelection method
//on the RPS and then passing that result into the convertToRPS to convert the interger 
//into a string for 'Rock', 'Scissors' and 'Paper'. 

//Then this function calls the RSP methods for getRPSResults and the selction and the player)
//The result is then passed into the RPS method displayGameOutput

const playGame = function (player) {
    let gameChoice = getGameChoice(getRandomInterger(0, 2))
    let playerChoice = getGameChoice(getRandomInterger(0, 2))
    let result = getRPSResult(player, gameChoice, playerChoice)
    const filterbyPlayer = gamePlayDetail.filter(function (game) {
        return game.player === player.id
    })
    displayGameOutput(filterbyPlayer, result, player.name)
}

const displayGameOutput = function (playerArray, result, player_name) {
    console.log(`${result}`)
    console.log(`${player_name} has played a total of ${playerArray.length} times!`)
    const winsArray = playerArray.filter(function (game) {
        return game.result === 'Win'
    })
    console.log(`${player_name} has won a total of ${winsArray.length} times!`)
    console.log(`${player_name} wins ${winsArray.length / playerArray.length * 100}% of the time`)
    console.log(`===========End of Game Output============\n`)
}

const displayGameStatistics = function () {
    const gameWinsArray = gamePlayDetail.filter(function (game) {
        return game.result === 'Loss'
    })
    const gameTiesArray = gamePlayDetail.filter(function (game) {
        return game.result === 'Tie'
    })
    console.log(`Total Games Won    ${gameWinsArray.length} times!`)
    console.log(`Total Games Tied   ${gameTiesArray.length} times!`)
    console.log(`Total Games Played ${gamePlayDetail.length} times!`)
    console.log(`Game wins ${gameWinsArray.length / gamePlayDetail.length * 100}% of the time`)
    console.log(`=========End of Game Statistics==========\n`)
}

//This is where my code starts!  Calling playGame with the player object that is playing
//Refactor to determine a random times to play between 1 and 10
//Refactory to determine a random player between 0 and 2

const playRandomTimes = function() {
    let numOfGames = getRandomInterger(1, 11)
    for (let i = 1; i <= numOfGames; i++) {
        console.log(`==========  GAME ${i} ========= \n`)
        let randomInt = getRandomInterger(1, 3)
        if(randomInt === 1) {
            playGame(player_1)
        } else if (randomInt === 2) {
            playGame(player_2)
        } else {
            playGame(player_3)
        }
    }

}

playRandomTimes()
displayGameStatistics()

console.log(gamePlayDetail)


