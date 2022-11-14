
const theButton = document.querySelector('button')
console.log(theButton)
let theMain = document.querySelector('main')
let theTxt = document.getElementById('theText')

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
    theTxt.textContent = "uh oh...i think you might have killed her..."
    theButton.animate(unicornSpinning, unicornTiming);

}

