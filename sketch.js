var wall1, thickness;
var bllet, speed, weight;

function setup(){
  createCanvas(1600,400);
 speed = random(55,90);
 thickness = random(232,321);
 weight = random(30,52);
 bllet = createSprite(50,200,50,30);
 wall1=createSprite(1500,200,thickness,height/2);
}

function draw(){
  background(0,0,0);
  bllet.velocityX = speed;
  if(wall1.x-bllet.x < (bllet.width+wall1.width)/2){
    bllet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall1.shapeColor=color('green');
    }
    if(damage<10){
      wall1.shapeColor=color(0,255,0);
    }
  }
    drawSprites();
}