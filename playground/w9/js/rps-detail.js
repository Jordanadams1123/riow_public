'use strict'
//get uudi from location 
const gameId = location.hash.substring(1)
const games = getSavedGameDetail()
//find game by uuid
const game = games.find(function(game){
    return game.id === gameId
})
//if uuid not found return 
if(game === undefined) {
    location.assign('/index.html')
}

//create DOM element for game detail
const gameDetail = document.getElementById('game-detail')
const h1 = document.createElement('h1')
h1.textContent = `${game.player} selected ${game.playerChoice} and we selected ${game.gameChoice} and the result was ${game.result} for the player!`
gameDetail.appendChild(h1)

//create DOM elemtn to return to index using player name as the hash
const link = document.createElement('a')
link.setAttribute('href', 'index.html#' + game.player)
link.textContent = 'Return to Game'
gameDetail.appendChild(link)

//NOT Complete - determine which star the user clicked on update local store with review data
// document.getElementById('review').addEventListener('click', () => {
//     let reviewStars = document.getElementsByName('rate')
//     reviewStars.forEach(function (star) {
//         if (star.checked) {
//             console.log(star.value)
//             game.review = star.value
//             saveGamePlayDetail(games)
//         }
//     })
// })