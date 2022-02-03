/// <reference path="./resources/p5.d.ts" />

function setup() {
  createCanvas(400, 400);
  
}


function draw() {
  background(223,0,0);
  noStroke();

  fill(255,255,255);
  rect(0,0,width/4,height);
  rect(width/4,2 * height/4,width,height / 4);
  
  fill(0,0,255);
  rect(0,height/2,width/4,height/4);

  fill(225,0,0);
  rect(width/16,0,width/8,height);
  rect(0,height/16+height/2,width,height/8);

  fill(0,0,0);
  rect(width/4,0,10,height);
  rect(0,height/2-10,width,10);
  rect(0,3*height/4,width,10);

  fill(244,223,66);
  rect(width/3,0,width * 2 / 3,height / 2 - height / 12);
  rect(width/3,height*3/4 + height / 12,width * 2 / 3,height / 2);
  
}