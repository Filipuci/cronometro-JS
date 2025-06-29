let seconds = 0
let minutes = 0
let hours = 0

let myInterval = null

document.querySelector('.play').addEventListener('click', () => {
  if (myInterval !== null) return
  myInterval = setInterval(incrementTime, 1000)
})

document.querySelector('.stop').addEventListener('click', () => {
  clearInterval(myInterval)
  myInterval = null
})

document.querySelector('.reset').addEventListener('click', () => {
  seconds = 0
  minutes = 0
  hours = 0

  updateDisplay()
  clearInterval(myInterval)
  myInterval = null
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
  document.querySelector('#seconds').textContent = formatTwoDigits(seconds)
  document.querySelector('#minutes').textContent = formatTwoDigits(minutes)
  document.querySelector('#hours').textContent = formatTwoDigits(hours)
}

const formatTwoDigits = number => number.toString().padStart(2, '0')
