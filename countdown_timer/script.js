//one way to target date
/* let countdownDate = new Date("26 October 2022 00:00")

other method for setting countdownDate
// display content 30 seconds after user has landed on page
let countdownDate = new Date().setSeconds(new Date().setSeconds() + 30)

// same thing for five minutes
let countdownDate = new Date().setMinutes(new Date().getMinutes() + 5)

// same thing for one hour
let countdownDate = new Date().setHours(new Date().getHours() + 1) */


// let countdownDate = new Date().setSeconds(new Date().getSeconds() + 10)

let countdownDate = new Date("24 October 2022 01:39")

let timerInterval

const daysElem = document.getElementById("days")
const hoursElem = document.getElementById("hours")
const minsElem = document.getElementById("mins")
const secondsElem = document.getElementById("seconds")
const timer = document.getElementById("timer")
const content = document.getElementById("content")

const formatTime = (time, string) => {
  return time === 1 ? `${time} ${string}` : `${time} ${string}s`
}

const startCountdown = () => {
  const now = new Date().getTime()
  const countdown = new Date(countdownDate).getTime()

  const difference = (countdown - now) / 1000 // divide milliseconds by 1000 to get seconds, ms automatic in ECMAScript

  if (difference < 1) {
    endCountdown()
  }

  let days = Math.floor(difference / (60 * 60 * 24))
  let hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60))
  let minutes = Math.floor((difference % (60 * 60)) / 60)
  let seconds = Math.floor(difference % 60)

  daysElem.innerHTML = formatTime(days, "day")
  hoursElem.innerHTML = formatTime(hours, "hour")
  minsElem.innerHTML = formatTime(minutes, "minute")
  secondsElem.innerHTML = formatTime(seconds, "second")
}

const endCountdown = () => {
  clearInterval(timerInterval)
  timer.remove()
  content.classList.add("visible")
}

window.addEventListener("load", () => {
  startCountdown()
  timerInterval = setInterval(startCountdown, 1000)
})
