let popup = document.getElementById("popup")
const theButton = document.querySelector('button')
console.log(theButton)
let theMain = document.querySelector('main')
let theTxt = document.getElementById('theText')
let theTxt2 = document.getElementById("back")
// let counter = document.getElementById('counter')


function openPopup(){
      popup.classList.add("open-popup");
      overlay.classList.add('active')
  }
function closePopup(){
      popup.classList.remove("open-popup");
      overlay.classList.remove('active')
  }

const unicornSpinning = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
  const unicornTiming = {
    duration: 4000,
    iterations: 1,
  }

theButton.addEventListener('click', changeText)

function changeText(){
    console.log("slay!")
    theTxt.textContent = "scroll down"
    theTxt2.textContent = "keep clicking the unicorns (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧"
    // counter.textContent = "counter: 1"
    theButton.animate(unicornSpinning, unicornTiming);
}

