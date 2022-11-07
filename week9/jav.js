var video 

function setup() {
  createCanvas(800,600);
  video = createCapture(VIDEO)
  video.size(800,600)
  strokeWeight(0.5)
  stroke(0)
}

function draw() {
  background(0);
  video.loadPixels()
  var bubble = 20
  for (var x = 0; x < video.width; x += bubble){
    for (var y = 0; y < video.height; y += bubble){
      var index = ((y * video.width) + x) * 4
      var r = video.pixels[index]
      var g = video.pixels[index + 1]
      var b = video.pixels[index + 2]
      fill(r,g,b)
      ellipse(x,y,bubble,bubble)
    }
  }
}