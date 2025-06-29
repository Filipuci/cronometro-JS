const hoursElement = document.querySelector('#hours')
const minutesElement = document.querySelector('#minutes')
const secondsElement = document.querySelector('#seconds')

let countSeconds = 0
let countMinutes = 0
let countHours = 0

let myInterval = null

document.querySelector('.play').addEventListener('click', () => {
  if (myInterval !== null) return
  myInterval = setInterval(timeAdd, 1000)
})

document.querySelector('.stop').addEventListener('click', () => {
  clearInterval(myInterval)
  myInterval = null
})

document.querySelector('.reset').addEventListener('click', () => {
  countSeconds = 0
  countMinutes = 0
  countHours = 0

  updateDisplay()
})

function timeAdd() {
  countSeconds++ 
  if (countSeconds === 60) {
    countMinutes++
    countSeconds = 0
  }
  if (countMinutes === 60) {
    countHours++
    countMinutes = 0
  }

  updateDisplay()
}

function updateDisplay() {
  secondsElement.textContent = padding(countSeconds)
  minutesElement.textContent = padding(countMinutes)
  hoursElement.textContent = padding(countHours)
}


function padding(number) {
  return number.toString().padStart(2, '0')
}
