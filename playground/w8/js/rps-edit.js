const gameId = location.hash.substring(1)
const games = getSavedGameDetail()
const game = games.find(function(game){
    return game.id === gameId
})

if(game === undefined) {
    location.assign('/index.html')
}

const gameDetail = document.getElementById('game-detail')
const h1 = document.createElement('h1')
h1.textContent = `${game.player} selected ${game.playerChoice} and we selected ${game.gameChoice} and the result was ${game.result} for the player!`
gameDetail.appendChild(h1)

const link = document.createElement('a')

link.setAttribute('href', 'index.html#' + game.player)
link.textContent = 'Return to Game'
gameDetail.appendChild(link)

console.log(document.getElementsByName('rate'))


document.getElementById('review').addEventListener('click', function () {
    let reviewStars = document.getElementsByName('rate')
    reviewStars.forEach(function (star) {
        if (star.checked) {
            console.log(star.value)
            game.review = star.value
            saveGamePlayDetail(games)
        }
    })
})

console.log(game)

