//Game Play Detail from developIT 1 output

const gamePlayDetail = [{
    player: 3,
    result: 'Loss',
    playerChoice: 'Rock',
    gameChoice: 'Paper'
},
{
    player: 2,
    result: 'Win',
    playerChoice: 'Scissors',
    gameChoice: 'Paper'
},
{
    player: 1,
    result: 'Tie',
    playerChoice: 'Scissors',
    gameChoice: 'Scissors'
},
{
    player: 1,
    result: 'Tie',
    playerChoice: 'Paper',
    gameChoice: 'Paper'
},
{
    player: 1,
    result: 'Tie',
    playerChoice: 'Scissors',
    gameChoice: 'Scissors'
},
{
    player: 2,
    result: 'Loss',
    playerChoice: 'Rock',
    gameChoice: 'Paper'
},
{
    player: 1,
    result: 'Loss',
    playerChoice: 'Rock',
    gameChoice: 'Paper'
},
{
    player: 3,
    result: 'Tie',
    playerChoice: 'Paper',
    gameChoice: 'Paper'
},
{
    player: 2,
    result: 'Tie',
    playerChoice: 'Paper',
    gameChoice: 'Paper'
},
{
    player: 3,
    result: 'Tie',
    playerChoice: 'Scissors',
    gameChoice: 'Scissors'
}]

//filter to get the user input for later processing
const filter = {
    playerText: '',
    byGame: ''
}

//Setup my querySelectors once, saves time, coding
const playerInput = document.querySelector('#select-player')
const playerOutput = document.querySelector('#player-output')
const gameSearch = document.querySelector('#game-search')

//Eventlistener for user input on player 
playerInput.addEventListener('change', function(e){
    console.log('listening')
    filter.playerText = e.target.value
    renderPlayerDetail(gamePlayDetail, filter)
    e.target.value = ''
})

//Filter by game after filter by player is done rendering
//Building input dynamically. 
const displayGameFilter = function(filterPlayer, filter) {

    const gameFilter = document.createElement('input')
    gameFilter.setAttribute('id', 'game-filter')
    gameFilter.setAttribute('placeholder', 'Tie, Win or Loss')
    gameSearch.appendChild(gameFilter)
    gameSearch.addEventListener('change', function (e){
        filter.byGame = e.target.value
        renderSearchDetail(filterPlayer, filter)
        e.target.value = ''
    })
    
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
const renderPlayerDetail = function(gamePlayDetail, filter) {
    playerOutput.innerHTML = ''
    gameSearch.innerHTML = ''
    const filterPlayer = gamePlayDetail.filter(function (detail){    
        return detail.player === parseInt(filter.playerText)
    })
    
    if(filterPlayer.length === 0) {
        playerOutput.textContent = 'No player found'
    } else {
        filterPlayer.forEach(function(game) {
            const playEntry = document.createElement('p')
            playEntry.textContent = `Player ${game.player} ${game.result} by selecting ${game.playerChoice}.`
            playerOutput.appendChild(playEntry)
        })
        displayGameFilter(filterPlayer, filter)
    }
} 