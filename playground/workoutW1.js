//This code will take the input of a person, goal and current activity and duration
//to increase the total number of workout minutes and total calories burned.

let person = 'Rio Waller'
let goal = 'Loss 25 pounds'

let activity_1 = 'running'
let activity_2 = 'lifting'
let activity_3 = 'cardio'

let totalWorkOutMins = 10
let totalCaloriesBurned = 50

let currentActivity = 'running'
let currentActivityDuration = 15


//Add current acitivty duration to total workout minutes

totalWorkOutMins = totalWorkOutMins + currentActivityDuration

//Determine activity and then multiply current activity duration and a factor 
//to increase the total calories burned. 

if(currentActivity === activity_1) {    
    totalCaloriesBurned = totalCaloriesBurned + (currentActivityDuration * 25)
} else if (currentActivity === activity_2) {
    totalCaloriesBurned = totalCaloriesBurned + (currentActivityDuration * 15)
}  else if (currentActivity === activity_3) {
    totalCaloriesBurned = totalCaloriesBurned + (currentActivityDuration * 23)
} else {
    console.log('You did not select a activity we track')
}
//Display user output

console.log(person + ' ' + ' has a goal of ' + goal + '.')
console.log('The current activity is ' + currentActivity + ' and has been done for ' + currentActivityDuration + '.')
console.log('The bring the current number of minutes active to ' + totalWorkOutMins + ' and the total calories burned to ' + totalCaloriesBurned )