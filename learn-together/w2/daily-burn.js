//This code to be similar to a program I use each day to track my food and workouts to give me a daily calorie surplus or deficit
let name = "Rio Waller"

let message //message is in global scope and used in the if blocks below

let breakfastCalBudget = 500
let lunchCalBudget = 600
let dinnerCalBudget = 700

let isActive = true
let calMulitpler = 1.2

let isLunchTime = true
let isBreakfastTime = false
let isDinnerTime = false

if (!isBreakfastTime & !isLunchTime & !isDinnerTime) {
    console.log('Error: You need to have at least of the 3 times of meal set for program to function correctly')
} else {

    if (isBreakfastTime) {
        if (isActive) {
            message = 'your breakfast calorie budget has increased = ' + breakfastCalBudget * calMulitpler
        } else {
            message = ' your breakfast calorie budget = ' + breakfastCalBudget
        }
    }

    if (isLunchTime) {
        if (isActive) {
            message = 'your lunch calorie budget has increased = ' + lunchCalBudget * calMulitpler
        } else {
            message = ' your lunch calorie budget = ' + lunchCalBudget
        }
    }

    if (isDinnerTime) {
        if (isActive) {
            message = 'your dinner calorie budget has increased = ' + dinnerCalBudget * calMulitpler
        } else {
            message = ' your dinner calorie budget = ' + dinnerCalBudget
        }
    }

    console.log(name + message)

}



