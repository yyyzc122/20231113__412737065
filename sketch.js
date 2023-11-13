var sound1
function preload(){
  sound1 = loadSound("mixkit-tech-house-vibes-130.mp3") //先把音樂檔載入到sound1程式碼中
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background("#9d8189")
  analyzer = new p5.Amplitude();
  analyzer.setInput(sound1)
}
var x=50
var y=50
var w=100
var s_w=50
var fc

function draw() {
  background("#9d8189");
  noFill()  //不填充顏色
  if(sound1.isPlaying()){  //音樂有撥放時
     fc=map(analyzer.getLevel(),0,1,0,100)
}
  else{  //音樂未撥放時
     fc=map(mouseX,0,width,0,100)
  }
  for(var y=50;y<=height+50;y=y+w){
    for(var x=50;x<=width+50;x=x+w){
    stroke("#c6ac8f")
    strokeWeight(2)
    rectMode(CENTER)
    rect(x,y,w+fc)

    stroke("#8f2d56")
    strokeWeight(2)
    ellipse(x,y,w+fc)
    
    stroke("#1d2d44")
    strokeWeight(2)
    ellipse(x,y,100,s_w+fc)

    stroke("#450920")
    strokeWeight(2)
    ellipse(x,y,50,s_w+fc)
   }
 }
 
  textSize(fc+30)
  text("412737065車宜蓁",width/2,height/2)

}

function mousePressed(){
  if(sound1.isPlaying()){
    sound1.stop();
  }else{
    sound1.play();
  }
}
