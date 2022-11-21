function update(e){
    var x = e.clientX || e.touches[0].clientX
    var y = e.clientY || e.touches[0].clientY
  
    document.documentElement.style.setProperty('--cursorX', x + 'px')
    document.documentElement.style.setProperty('--cursorY', y + 'px')
  }
  
  document.addEventListener('mousemove',update)
  document.addEventListener('touchmove',update)

function play(){
const NBM_OF_BARS = 50;
  const audio = document.querySelector("audio");
  const ctx = new AudioContext();
  const audioSource = ctx.createMediaElementSource(audio);
  const analyzer = ctx.createAnalyser();

  audioSource.connect(analyzer);
  audioSource.connect(ctx.destination);

  const frequencyData = new Uint8Array(analyzer.frequencyBinCount);
  analyzer.getByteFrequencyData(frequencyData);
  console.log("frequencyData", frequencyData);

  const visualizerContainer = document.querySelector(".visualzer-container");


  for (let i = 0; i < NBR_OF_BARS; i++){
    const bar = document.createElement("DIV");
    bar.setAttribute("id", "bar" + i);
    bar.setAttribute("class", "visualizer-container__bar");
    visualizerContainer.appendChild(bar);
  }

  for (let i = 0; i < NBM_OF_BARS; i++){
    const index = (i+10)*2;
    const fd = frequencyData[index];
    const bar = document.querySelector("#bar" + i); 
    if(!bar){
        continue;
    }
    const barHeight = Math.max(4,fd||0);
    bar.style.height = barHeight + "px";
}

window.requestAnimationFrame(renderFrame);
}

renderFrame();
audio.volume = 0.10;
audio.play();

/*let popup=document.getElementById("popup");
    function openPopup(){
        popup.classList.add("open-popup");
    }
    function closePopup(){
        popup.classList.remove("open-popup");
    }*/
