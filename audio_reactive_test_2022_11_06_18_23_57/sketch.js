var amp
var volhistory = Array(360).fill(0)

function preload(){
  song = loadSound('SeaSwallowMe.mp3')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
 // angleMode(DEGREES)
  
   song.loop()
  
  amp = new p5.Amplitude() //amp analysis object
}

function draw() {
  background(0);
  

  var vol = amp.getLevel()
  volhistory.push(vol)
  stroke(random(255), random(255), random(255))
  noFill()
  
  translate(width/2, height/2)
  beginShape()
  for(var i = 0; i < 360; i++){
    var r = map(volhistory[i], 0, 1, 20, 2000)
    var x = r * cos(i)
    var y = r * sin(i)
    vertex(x,y)
  } 
  endShape() 
  
  if (volhistory.length > 360){
    volhistory.splice(0,1)
  } 
}