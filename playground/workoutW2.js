let person = 'Rio Waller'
let goal = 'Loss 25 pounds'

let totalWorkOutMins = 10
let totalCaloriesBurned = 50

const addToCaloriesBurned = function(activity, duration = 0) {
    totalWorkOutMins = totalWorkOutMins + duration
    if(activity === 'running') {    
        totalCaloriesBurned = totalCaloriesBurned + (duration * 25)
    } else if (activity === 'lifting') {
        totalCaloriesBurned = totalCaloriesBurned + (duration * 15)
    }  else if (activity === 'cardio') {
        totalCaloriesBurned = totalCaloriesBurned + (duration * 23)
    } else {
        console.log('You did not select a activity we track')
    }
}
const displayCurrentActivitySummary = function () {
    console.log(person + ' ' + ' has a goal of ' + goal + '.')
    console.log('The bring the current number of minutes active to ' + totalWorkOutMins + ' and the total calories burned to ' + totalCaloriesBurned )

}

const getEatOutDecision = function () {
    if(totalCaloriesBurned >= 1000) {
        console.log('You can eat out tonight, just do not over do it')
    } else if (totalCaloriesBurned <= 1000) {
        console.log('No eating out for you tonight')
    }
}

addToCaloriesBurned('running', 30)
displayCurrentActivitySummary()
getEatOutDecision()

addToCaloriesBurned('cardio', 20)
displayCurrentActivitySummary()
getEatOutDecision()

