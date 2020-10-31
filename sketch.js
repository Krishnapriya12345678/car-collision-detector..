var car,wall,car1
var speed,weight




function setup() {
  createCanvas(12000,800);
  car=createSprite(100, 200, 25, 25);
  wall=createSprite(800,200,10,800);
  speed=random(70,120)
  weight=random(400,1000)
}

function draw() {
  background('black');  
  drawSprites();
  car.velocityX=speed
  
  if(wall.x-car.x<(car.width+wall.width)/2){
  car.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509
  if(deformation>180){
    car.shapeColor='red'
    text('LETHAL',600,400)
    textSize(500)
  }
  if(deformation<180&&deformation>100){
    car.shapeColor='yellow' 
    text('OKAY',600,400)
    textSize(500)
  }
  if(deformation<100){
    car.shapeColor='green'
    text('GOOD',600,400)
    textSize(500)
  }
  }
}