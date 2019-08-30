
//Rock, Scissors, Paper (RPS) Game by Rio Waller
//I've been playing with the RPS game in my machine learning studies and I'm using 
//it here to give my CIT93 students example code for this weekly work and developIT1 
//This code run from the bottom up and in it's current state it randomly selector the 
//player the game RPS selection.  
//This version was refactored to use objects for player data and RPS function as object methods. 


//Player 1 Object

const player_1 = {
    name: 'Rio Waller',
    email: 'riowaller@gmail.com',
    gamesPlayed: 0,
    gamesWon: 0
}

//Player 2 Object 
const player_2 = {
    name: 'Jan Student',
    email: 'student@gmail.com',
    gamesPlayed: 0,
    gamesWon: 0
}

//RPS Game Play Object

const RPS = {
    totalGames: 0,
    totalWins: 0,
    //This methods determines a random interger between 0 and 2 using Math.floor and Math.Random
    //Inspired by MDN - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment

    getGameSelection: function() {
        let min = 0
        let max = 2
        return Math.floor(Math.random() * (max - min + 1)) + min
    },
    //This metod takes in the return value of the random generation of an interger between 0 and 2 (getGameSelection)
    //and returns a string for the selection of Rock Scissors Paper
    convertToRPS: function(choiceInt) {
        if (choiceInt === 0) {
            return 'Rock'
        } else if (choiceInt === 2) {
            return 'Scissors'
        } else {
            return 'Paper'
        }
    },
    //This methods is the core logic for the RPS game
    //It will also add to the player and game totals and return a string
    //that is the result of the logic (if blocks)
    getRPSResult: function (playerChoice, gameChoice, player) {
        this.totalGames++
        player.gamesPlayed++
        if (playerChoice === gameChoice) {
            return 'Tie'
        }
        if (playerChoice === 'Rock') {
            if (gameChoice === 'Scissors') {
                player.gamesWon++
                return 'Rock beats Scissors - Player Wins'
            } else {
                this.totalWins++
                return 'Scissors beats Paper - Game Wins'
            }
        }

        if (playerChoice === 'Paper') {
            if (gameChoice === 'Rock') {
                player.gamesWon++
                return 'Paper beats Rock - Player Wins'
            } else {
                this.totalWins++
                return 'Scisster cuts Paper - Game Wins'
            }
        }

        if (playerChoice === 'Scissors') {
            if (gameChoice === 'Paper') {
                player.gamesWon++
                return 'Scissors Cut Paper - Player Wins'
            } else {
                this.totalWins++
                return 'Rock crushess Scissors - Game Wins'
            }
        }

    },
    //Displays the game output with minor statistics for the game and player
    displayGameOutput: function(player, result) {
        console.log(`${result}`)
        console.log(`${player.name} has played a total of ${player.gamesPlayed} times!`)
        console.log(`${player.name} has won a total of ${player.gamesWon} times!`)
        console.log(`${player.name} wins ${player.gamesWon / player.gamesPlayed * 100}% of the time`)
        console.log(`Game wins ${this.totalWins / this.totalGames * 100}% of the time`)
        console.log(`===============End of Game================\n`)
    
    }
}

//This function get a determines the gameChoice and the playChoice by calling the getGameSelection method
//on the RPS and then passing that result into the convertToRPS to convert the interger 
//into a string for 'Rock', 'Scissors' and 'Paper'. 

//Then this function calls the RSP methods for getRPSResults and the selction and the player)
//The result is then passed into the RPS method displayGameOutput

const playGame = function(player) {
    let gameChoice = RPS.convertToRPS(RPS.getGameSelection())
    let playerChoice = RPS.convertToRPS(RPS.getGameSelection())
    let result = RPS.getRPSResult(playerChoice, gameChoice, player)
    RPS.displayGameOutput(player, result)
}

//This is where my code starts!  Calling playGame with the player object that is playing

playGame(player_1)
playGame(player_1)

playGame(player_2)
playGame(player_2)



