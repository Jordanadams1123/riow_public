const appName = 'My Working App'
const developer = 'Rio Waller'
const version = 3.45

const person_1 = {
    name: 'Rio Waller',
    goal: 'Lose 25 pounds',
    totalCal: 0,
    totalMin: 0,
    activityDetail: []
}

const  person_2 = {
    name: 'Jack Smith',
    goal: 'Run a half martathon',
    totalCal: 0,
    totalMin: 0,
    activityDetail: []
}

const saveActivityData = function (person, activity, duration) {
    
    console.log('this is the person being passed into the functinon' + person)
    let calories = 0
    if (activity === 'running') {
        calories = duration * 25
    } else if (activity === 'lifting') {
        calories = duration * 15
    } else if (activity === 'cardio') {
        calories = duration * 23
    }
    person.activityDetail.push({ activity: activity, duration: duration, calories: calories })

}

const getActivitySummary = function (person) {
    
    let totalCal = 0
    let totalMin = 0
    person.activityDetail.forEach(function (activity) {
        totalCal = totalCal + activity.calories
        totalMin = totalMin + activity.duration
    })
    person.totalCal = totalCal
    person.totalMin = totalMin
    //return [totalCal, totalMin]
    console.log(`${person.name} has burned ${totalCal} with ${totalMin} of activity.`)
}

const getEatOutDecision = function (person) {
    if (person.totalCal >= 1000) {
        console.log(`${person.name} can eatout tonight, just don't over do it`)
    } else if (person.totalCal <= 1000) {
        console.log(`${person.name} should not eat out tonight`)
    }
}

const displayPersonData = function (person) {
    console.log(`${person.name} has a goal of ${person.goal}.`)
    console.log(`${person.name} has burned a total of ${person.totalCal} and has had ${person.totalMin} of workout miutes`)
    person.activityDetail.forEach(function (entry) {
        console.log(`${person.name} ${entry.activity} and burned ${entry.calories} calories`)
    })
}

const getDailyInspriation = function (person) {
    if (person.totalMin > 45) {
        console.log(`find some inspiration message`)
    } else {
        console.log('find some butt kicking message')
    }
}    


saveActivityData(person_1, 'running', 20)
saveActivityData(person_1, 'lifting', 35)

saveActivityData(person_2, 'lifting', 30)

displayPersonData(person_1)
getActivitySummary(person_1)
getEatOutDecision(person_1)
console.log(person_1.activityDetail)
