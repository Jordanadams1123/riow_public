let person_1 = {
    name: 'Rio Waller',
    goal: 'Losee 25 pounds',
    totalWorkoutMins: 40,
    totalCaloriesBurned: 400 
}

let person_2 = {
    name: 'Jack Smith',
    goal: 'Run a half martathon',
    totalWorkoutMins: 10,
    totalCaloriesBurned: 50 
}

const activity = {
    addToPersonData: function(person, activity, duration) {
        let calories = 0
        if(activity === 'running') {
            calories = duration * 25
        } else if(activity === 'lifting') {
            calories = duration * 15
        } else if(activity === 'cardio') {
            calories = duration * 23
        }
        person.totalWorkoutMins = person.totalWorkoutMins + duration
        person.totalCaloriesBurned = person.totalCaloriesBurned + calories
    },
    displayPersonData: function(person) {
        console.log(`${person.name} has a goal of ${person.goal}.`)
        console.log(`${person.name} has burned a total of ${person.totalCaloriesBurned} and has had ${person.totalWorkoutMins} of workout miutes`)
    },
    getEatOutDecision: function(person) {
        if(person.totalCaloriesBurned >= 1000) {
            console.log(`${person.name} can eatout tonight, just don't over do it`)
        } else if(person.totalCaloriesBurned <= 1000) {
            console.log(`${person.name} should not eat out tonight`)
        }
    },
    getDailyInspriation: function(person) {
        if(person.totalWorkoutMins > 45) {
            console.log(`find some inspiration message`)
        } else {
            console.log('find some butt kicking message')
        }

    }
    
}

activity.addToPersonData(person_1,'running', 20)
activity.addToPersonData(person_2,'cardio', 35)
activity.displayPersonData(person_1)
activity.displayPersonData(person_2)

activity.getEatOutDecision(person_1)
activity.getEatOutDecision(person_2)
activity.getDailyInspriation(person_1)
activity.getDailyInspriation(person_2)








