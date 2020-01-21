//This code will determine calorie deficit or surplus based on simulated user input

//Setup Global variables
let name

let breakfastCalBudget
let lunchCalBudget
let dinnerCalBudget

//setup new client 
let setupNewClient = function (clientName, breakfast, lunch, dinner) {
    name = clientName
    breakfastCalBudget = breakfast
    lunchCalBudget = lunch
    dinnerCalBudget = dinner
}

//increase calorie budget based on activity level
let caloriesAllowed = function (isActive, calBudget) {
    if (isActive) {
        return calBudget * 1.2
    } else {
        return calBudget
    }
}

//determine calories - calls caloriesAllowed with activity and budgets returned total calories
let calculateCalories = function (breakfastActive, lunchActive, dinnerActive) {
    let breakfastCalories = caloriesAllowed(breakfastActive, breakfastCalBudget)
    let lunchCalories = caloriesAllowed(lunchActive, lunchCalBudget)
    let dinnerCalories = caloriesAllowed(dinnerActive, dinnerCalBudget)
    return breakfastCalories + lunchCalories + dinnerCalories
}

//determines actual calories
let calculateActualCalories = function (breakfast, lunch, dinner) {
    return breakfast + lunch + dinner

}

//determines results of daily calorie budget and actual calories intake returns string value
let determineDailyResult = function (budget, actual) {
    let result = budget - actual
    if (result > 0) {
        return `NICE work, you have a calorie deficit of ${result} calories`
    } else {
        return `Today you did not reach your goals and a calories surplus of ${result}`
    }
}

//add a function to display on the page, using document.createElement to display multiple output messages
let displayOnPage = function(message) {
    let el = document.createElement('p')
    el.textContent = message
    let output = document.getElementById('output')
    output.appendChild(el)
}

//test with different clients, budgets and actual

console.log('<---------Running daily calorie burn----------->')
setupNewClient('Rio Waller', 400, 500, 700)
let totalBudgetCalories = calculateCalories(false, false, false)
let totalActualCalories = calculateActualCalories(400, 700, 800)
//console.log(`${name} ${determineDailyResult(totalBudgetCalories, totalActualCalories)}`)
displayOnPage(`${name} ${determineDailyResult(totalBudgetCalories, totalActualCalories)}`)

console.log('<---------Running daily calorie burn----------->')
setupNewClient('Jack Black', 400, 500, 700)
totalBudgetCalories = calculateCalories(true, true, true)
totalActualCalories = calculateActualCalories(400, 700, 700)
//console.log(`${name} ${determineDailyResult(totalBudgetCalories, totalActualCalories)}`)
displayOnPage(`${name} ${determineDailyResult(totalBudgetCalories, totalActualCalories)}`)