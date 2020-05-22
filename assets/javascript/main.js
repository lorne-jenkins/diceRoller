
const rollButton = document.querySelector('#roll-button')
const numberOfRolls = document.querySelector('#Number-of-dice')
const sumTotalelement = document.querySelector('#sumTotal')
const allRollsElement = document.querySelector('#Sum-total-dice-rolls')
const shoYaRolls = document.querySelector('#Show-roll-button')

const diceSidesButton = document.querySelector('#Sides-button')
const numberOfDiceSides = document.querySelector('#Dice-sides')
const maxNumberOnDice = document.querySelector('#diceSide')

let RESET = document.querySelector("#reset-button")
let numResets = document.querySelector("#num-resets")

let dieRolls = []
let dieSides = 6

diceSidesButton.addEventListener('click', function () {
    // console.log('Dice side button clicked')
    let tempSideDie = numberOfDiceSides.value
    if (tempSideDie > 1) {
        dieSides = tempSideDie
    } else {
        dieSides = 6

    }
    maxNumberOnDice.innerHTML = dieSides
})

rollButton.addEventListener('click', function () {
    let Rolls = numberOfRolls.value
    dieRolls = []
    let totalSumish = 0
    let currentDieRoll = 0
    // console.log (Rolls)
    for (let i = 0; i < Rolls; i++) {
        currentDieRoll = Math.floor(Math.random() * dieSides) + 1
        dieRolls.push(currentDieRoll)
    }
    console.log(dieRolls)
    for (let i = 0; i < dieRolls.length; i++) {
        totalSumish = totalSumish + dieRolls[i]
    }
    sumTotalelement.innerHTML = totalSumish
})
shoYaRolls.addEventListener('click', function () {
    let numberRolled
    let newDiceString = []
    allRollsElement.innerHTML = []
    for (i = 0; i < dieRolls.length; i++) {
        numberRolled = dieRolls[i]
        newDiceString = '<li style = "list-style: decimal" class="dice">' + numberRolled + "</li>";
        allRollsElement.innerHTML += newDiceString;
        console.log(dieRolls[i])
    }
    console.log(dieRolls)
})
RESET.addEventListener('click', function () {
    console.log("Reset button clicked")
    let nextValnumResets = Number(numResets.innerHTML) + 1
    numResets.innerHTML = nextValnumResets
    dieRolls = []
    sumTotalelement.innerHTML = 0
    allRollsElement.innerHTML = []
})
