var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(100, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(700,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityX = -5;
  fixedRect.velocityX = 5;

  rect1 = createSprite(100,150,50,50);
  rect2 = createSprite(300,150,15,15);
}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

/*if(isTouching(movingRect, rect2)){
  movingRect.shapeColor = "red";
  rect2.shapeColor = "red";
}
else {
  movingRect.shapeColor = "green";
  rect2.shapeColor = "green";
}*/
  bounceOff(movingRect, fixedRect);

  drawSprites();
}