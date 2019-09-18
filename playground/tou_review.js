// RoboChicken Farmer

let roboChicken = 'Mr. Goldilocks'
let jobDuties = 'Chicken Farmer'
let overView = 'A poultry farm employee assists in daily operations on the farm. This can include checking birds, collecting eggs and feeding.'

let duty_1 = 'Ensure birds have access to food and water'
let duty_2 = 'Identify sick or injured birds'
let duty_3 = 'Sorting, Washing, Collecting eggs'
let duty_4 = 'Control temperature of chicken coops'
let duty_5 = 'Conduct maintenace on house and water/heat system'
let duty_6 = 'Control house lighting'
let duty_7 = 'Maintain high standards of animal welfare'

//let totalWorkHours = '12 hours' 
let totalWorkHours = 12

//let restMinutes = '15 mins'
let restMinutes = 15

let currentActivity = 'Sorting, Washing, Collecting eggs'
let currentActivityDuration = 30

//Add job duities and total of work hours

totalWorkHours = totalWorkHours + currentActivityDuration
console.log(totalWorkHours)

//Overview of chicken activity and multiply job duties works and see outcomes
//Estimate of how fast a roboCicken finish a task

if(currentActivity === duty_1) {    
    totalWorkHours = totalWorkHours + (currentActivityDuration * 12)
} else if (currentActivity === duty_2) {
    totalWorkHours = totalWorkHours + (currentActivityDuration * 12)
}  else if (currentActivity === duty_3) {
    totalWorkHours = totalWorkHours + (currentActivityDuration * 12)
} else {
    console.log('First task for roboChicken to feed chickens. Then collect eggs in the next session!')
}

console.log(totalWorkHours)

//Print roboChicken Output

console.log(roboChicken + ' ' + ' has meet his goal ' + jobDuties + ' Onto his next duty! ')
console.log('The current activity ' + currentActivity + ' has been completed in ' + currentActivityDuration + '.')
console.log('The current hours roboChicken has work ' + totalWorkHours + ' and the total of breaks ' + restMinutes)

