
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
    getGameSelection: function() {
        let min = 0
        let max = 2
        return Math.floor(Math.random() * (max - min + 1)) + min
    },
    convertToRPS: function(choiceInt) {
        if (choiceInt === 0) {
            return 'Rock'
        } else if (choiceInt === 2) {
            return 'Scissors'
        } else {
            return 'Paper'
        }
    },
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
    displayGameOutput: function(player, result) {
        console.log(`${result}`)
        console.log(`${player.name} has played a total of ${player.gamesPlayed} times!`)
        console.log(`${player.name} has won a total of ${player.gamesWon} times!`)
        console.log(`${player.name} wins ${player.gamesWon / player.gamesPlayed * 100}% of the time`)
        console.log(`Game wins ${this.totalWins / this.totalGames * 100}% of the time`)
        console.log(`===============End of Game================\n`)
    
    }
}

const playGame = function(player) {
    let gameChoice = RPS.convertToRPS(RPS.getGameSelection())
    let playerChoice = RPS.convertToRPS(RPS.getGameSelection())
    let result = RPS.getRPSResult(playerChoice, gameChoice, player)
    RPS.displayGameOutput(player, result)
}


playGame(player_1)
playGame(player_1)

playGame(player_2)
playGame(player_2)



