let popup = document.getElementById("popup")
const theButton = document.querySelector('button')
const twoButton = document.querySelector('button')
console.log(theButton)
let theMain = document.querySelector('main')
let theTxt = document.getElementById('theText')


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
tButton.addEventListener('click', changeText)

function changeText(){
    console.log("slay!")
    theTxt.textContent = "scroll down"
    theTxt.textContent = "keep clicking the unicorn (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧"
    theButton.animate(unicornSpinning, unicornTiming);
}
