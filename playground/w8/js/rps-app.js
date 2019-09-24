const playerName = document.getElementById('player-name')
const playerInputErr = document.getElementById('player-input-err')
const scissorsClick = document.getElementById('click-scissors')
const rockClick = document.getElementById('click-rock')
const paperClick = document.getElementById('click-paper')
const rpsOutput = document.getElementById('rps-output')
const playerHistory = document.getElementById('game-history')
const playerOutput = document.getElementById('player-output')
const currentPlayer = document.getElementById('current-player')



let gamePlayDetail = getSavedGameDetail()

const linkedPlayer = location.hash.substring(1)
console.log(linkedPlayer)
if(!linkedPlayer){
    let player = ''
} else {
    let player = linkedPlayer
    const h2 = document.createElement('h2')
    h2.textContent = `${player} is now playing`
    currentPlayer.appendChild(h2)
    renderGameDetail(gamePlayDetail, filters, player)
}



scissorsClick.addEventListener('click', function (e) {
    if(player === '') {
        playerInputErr.textContent = 'HEY!!!! CAN YOU READ? Enter PLAYER NAME TO START'
    } else {
        playGame(player, 'Scissors')
    }
})

paperClick.addEventListener('click', function (e) {
    if(player === '') {
        playerInputErr.textContent = 'HEY....CAN YOU READ? Enter PLAYER NAME TO START'
    } else {
        playGame(player, 'Paper')
    }
})

rockClick.addEventListener('click', function (e) {
    if(player === '') {
        playerInputErr.textContent = 'HEY....CAN YOU READ? Enter PLAYER NAME TO START'
    } else {
        playGame(player, 'Rock')
    }
})

playerName.addEventListener('change', function(e){
    if(e.target.value === '') {
        playerInputErr.textContent = `HEY....CAN YOU READ? Enter PLAYER NAME TO START!`
    } else {
        player = e.target.value.toLowerCase()
        e.target.value = ''
        currentPlayer.innerHTML = ''
        const h2 = document.createElement('h2')
        h2.textContent = `${player} is now playing`
        currentPlayer.appendChild(h2)
        renderGameDetail(gamePlayDetail, filters, player)
    }
})

playerName.addEventListener('input', function(){
    playerInputErr.innerHTML = ''
    console.log(gamePlayDetail)
})
