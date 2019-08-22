//Game Play Variables

let player = 'Rio'

let playerTotalGames = 7
let playerTotalWins = 3

let playerSelection = 'Rock'
let gameSelection = 'Paper'

//Game Play

if (gameSelection === 'Rock' && playerSelection === 'Rock') {
    console.log('Tie')
    playerTotalGames = playerTotalGames + 1
} else if (gameSelection === 'Rock' && playerSelection === 'Scissors') {
    console.log('Game Wins')
    playerTotalGames = playerTotalGames + 1
} else if (gameSelection === 'Rock' && playerSelection === 'Paper') {
    console.log(player + 'Wins')
    playerTotalGames = playerTotalGames + 1
    playerTotalWins = playerTotalWins + 1
} else if (gameSelection === 'Paper' && playerSelection === 'Paper') {
    console.log('Tie')
    playerTotalGames = playerTotalGames + 1
} else if (gameSelection === 'Paper' && playerSelection === 'Rock') {
    console.log('Game Wins')
    playerTotalGames = playerTotalGames + 1
} else if (gameSelection === 'Paper' && playerSelection === 'Scissors') {
    console.log(player + 'Wins')
    playerTotalGames = playerTotalGames + 1
    playerTotalWins = playerTotalWins + 1
} else if (gameSelection === 'Scissors' && playerSelection === 'Scissors') {
    console.log('Ties')
    playerTotalGames = playerTotalGames + 1
} else if (gameSelection === 'Scissors' && playerSelection === 'Paper') {
    console.log('Game Wins')
    playerTotalGames = playerTotalGames + 1
} else if (gameSelection === 'Scissors' && playerSelection === 'Rock') {
    console.log(player + 'Wins')
    playerTotalGames = playerTotalGames + 1
    playerTotalWins = playerTotalWins + 1
} else {
    console.log('No One Wins, check your variable assignments')
}

//Game Play Ouptut

console.log(player + ' has played a total of ' + playerTotalGames + ' times!')
console.log(player + ' has won a total of ' + playerTotalWins + ' times!')
console.log(player + ' wins ' + playerTotalWins / playerTotalGames * 100 + '% of the time')

