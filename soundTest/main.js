//参考URL
//https://codepen.io/lsuddem/pen/RJEYLr

let player;

let shifter;
let button;

let baseURL = "music.wav"; 

function preload(){

  shifter = new Tone.PitchShift(2).toMaster();

  player = new Tone.Player(baseURL).connect(shifter); 
  player.loop = true;
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  button =createButton("Play Sound");
  button.position(width/2-50, height/2);
  button.mousePressed(play1);
}

function draw() {
  shifter.pitch = map(mouseX, 0, windowWidth,-3,3);

}

function play1(){
  player.start();
}



