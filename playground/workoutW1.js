
let person = 'Rio Waller'
let goal = 'Loss 25 pounds'

let activity_1 = 'running'
let activity_2 = 'lifting'
let activity_3 = 'cardio'

let totalWorkOutMins = 10
let totalCaloriesBurned = 50

let currentActivity = 'running'
let currentActivityDuration = 15


//Session Activity
totalWorkOutMins = totalWorkOutMins + currentActivityDuration

if(currentActivity === activity_1) {    
    totalCaloriesBurned = totalCaloriesBurned + (currentActivityDuration * 25)
} else if (currentActivity === activity_2) {
    totalCaloriesBurned = totalCaloriesBurned + (currentActivityDuration * 15)
}  else if (currentActivity === activity_3) {
    totalCaloriesBurned = totalCaloriesBurned + (currentActivityDuration * 23)
} else {
    console.log('You did not select a activity we track')
}


console.log(person + ' ' + ' has a goal of ' + goal + '.')
console.log('The current activity is ' + currentActivity + ' and has been done for ' + currentActivityDuration + '.')
console.log('The bring the current number of minutes active to ' + totalWorkOutMins + ' and the total calories burned to ' + totalCaloriesBurned )