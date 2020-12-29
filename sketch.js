var bullet, wall;
var speed, weight;
var thickness;
var deformation
function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50,200,30,10);
  bullet.shapeColor = "white";
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor = rgb(80,80,80);
  bullet.velocityX=speed;
}

function draw() {
  background(0);  
  if (wall.x - bullet.x < bullet.width/2 + wall.width/2){
    bullet.velocityX = 0;
    bullet.x = 1200-wall.width+5;
    deformation = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if (deformation<10){
      wall.shapeColor="green";
    }
    if (deformation>10){
      wall.shapeColor="red";
    }
  }
  drawSprites();
}