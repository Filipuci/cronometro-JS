const secondsElement = document.querySelector('#seconds')
const minutesElement = document.querySelector('#minutes')
const hoursElement = document.querySelector('#hours')

let seconds = 0
let minutes = 0
let hours = 0

let timer = null

document.querySelector('.play').addEventListener('click', () => {
  if (timer !== null) return
  timer = setInterval(incrementTime, 1000)
})

document.querySelector('.stop').addEventListener('click', () => {
  clearInterval(timer)
  timer = null
})

document.querySelector('.reset').addEventListener('click', () => {
  clearInterval(timer)
  timer = null

  seconds = 0
  minutes = 0
  hours = 0
  updateDisplay()
})

const incrementTime = () => {
  seconds++ 
  if (seconds === 60) {
    minutes++
    seconds = 0
  }
  if (minutes === 60) {
    hours++
    minutes = 0
  }

  updateDisplay()
}

const updateDisplay = () => {
  secondsElement.textContent = formatTwoDigits(seconds)
  minutesElement.textContent = formatTwoDigits(minutes)
  hoursElement.textContent = formatTwoDigits(hours)
}

const formatTwoDigits = n => n.toString().padStart(2, '0')
