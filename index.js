window.onload = function() {
  var tens = 00
  var seconds = 00
  let counterTen = document.querySelector('.tens')
  let counterSecond = document.querySelector('.seconds')
  let start = document.querySelector('.start-btn')
  let stop = document.querySelector('.stop-btn')
  let reset = document.querySelector('.reset-btn')
  let myInterval

  start.onclick = function() {
    clearInterval(myInterval)
    myInterval = setInterval(timerCount, 10)
  }

  stop.onclick = function() {
    clearInterval(myInterval)
  }

  reset.onclick = function() {
    clearInterval(myInterval)
    tens = "00"
    seconds = "00"
    counterTen.innerHTML = tens
    counterSecond.innerHTML = seconds
  }

  function timerCount() {
    tens++
    if (tens <= 9) {
      counterTen.innerHTML = "0" + tens
    }
    if (tens > 9) {
      counterTen.innerHTML = tens
    }
    if (tens > 99) {
      seconds++
      counterSecond.innerHTML = "0" + seconds
      tens = 0
      counterTen.innerHTML = "0" + 0
    }
    if (seconds > 9) {
      counterSecond.innerHTML = seconds;
    }
  }

}
