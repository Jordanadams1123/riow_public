const player = location.hash.substring(1)
const gameReviews = getSavedReviews()
const reviewText = document.getElementById('review-text')
const submitReview = document.getElementById('submit-review')

//Setup submit button text and a href
const link = document.createElement('a')
link.setAttribute('href', 'index.html#' + player)
link.textContent = 'Return to Game'
submitReview.appendChild(link)

//search for review
const review = gameReviews.find((review) => review.player === player)

//if there is a review, populate the textarea with the value
if (review) {
    reviewText.value = review.review
}

//EventListener for change to textarea if there wasn't a review then push object into array
//if there is an review then update review with new review text.
reviewText.addEventListener('change', (e) => {
    if (!review) {
        gameReviews.push({ player, review: e.target.value })
    } else {
        review.review = e.target.value
    }
    saveGameReview(gameReviews)

})
