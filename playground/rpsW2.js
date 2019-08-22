// Set Player and Game Statictics

const player = 'Rio'

let playerTotalGames = 0
let playerTotalWins = 0
let gameTotalWins = 0

let playChoice, gameChoice


//This function was heavyly inspried by https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//Refactor to work in my RPS game 


//This function randomly selects a interger from 0 to 2 
//Math.ceil -  function always rounds a number up to the next largest whole number or integer.
//Math.floor -  function returns the largest integer less than or equal to a given number.
//Math.random - function returns a floating-point, pseudo-random number in the range 0–1 
//According to MDN this would be a inclusive getRandom function 

const getRandomInt = function () {
    let min = 0
    let max = 2
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

//Convert Choice Intergar to Game String 

const convertToRPS = function (choiceInt) {
    if (choiceInt === 0) {
        return 'Rock'
    } else if (choiceInt === 2) {
        return 'Scissors'
    } else {
        return 'Paper'
    }
}

//Get Rock Scissors Paper game results and return as String, refactored nested if statments to decrease number of comparsion operations. 

const getRPSResults = function (playerChoice, gameChoice) {
    playerTotalGames++
    if (playerChoice === gameChoice) {
        return 'Tie'
    }
    if (playerChoice === 'Rock') {
        if (gameChoice === 'Scissors') {
            playerTotalWins++
            return 'Rock beats Scissors - Player Wins'
        } else {
            gameTotalWins++
            return 'Scissors beats Paper - Game Wins'
        }
    }

    if (playerChoice === 'Paper') {
        if (gameChoice === 'Rock') {
            playerTotalWins++
            return 'Paper beats Rock - Player Wins'
        } else {
            gameTotalWins++
            return 'Scisster cuts Paper - Game Wins'
        }
    }

    if (playerChoice === 'Scissors') {
        if (gameChoice === 'Paper') {
            playerTotalWins++
            return 'Scissors Cut Paper - Player Wins'
        } else {
            gameTotalWins++
            return 'Rock crushess Scissors - Game Wins'
        }
    }

}

//Hand Game Output

const gameOutput = function () {
    console.log(`${player} has played a total of ${playerTotalGames} times!`)
    console.log(`${player} has won a total of ${playerTotalWins} times!`)
    console.log(`${player} wins ${playerTotalWins / playerTotalGames * 100}% of the time`)
    console.log(`Game wins ${gameTotalWins / playerTotalGames * 100}% of the time`)
    console.log(`===============End of Game================\n`)

}

//Keep Player and Game Selection DRY

const getPlayerSelection = function () {
    let playerChoiceInt = getRandomInt()
    return convertToRPS(playerChoiceInt)
}


const getGameSelection = function () {
    let gameChoiceInt = getRandomInt()
    return convertToRPS(gameChoiceInt)
}

const playGame = function() {
    playerChoice = getPlayerSelection()
    gameChoice = getGameSelection()
    console.log(getRPSResults(playerChoice, gameChoice))
    gameOutput()
}


//Play Game 1
playGame()

//Play Game 2
playGame()

//Play Game 3
playGame()

//Play Game 4
playGame()
