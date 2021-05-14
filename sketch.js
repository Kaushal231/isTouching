var oneRect,rectTwo;

function setup() {
  createCanvas(1200,800);
  oneRect=createSprite(400, 200, 50, 50);
  rectTwo=createSprite(100, 300, 50, 50);  
  oneRect.shapeColor="Blue";
  rectTwo.shapeColor="Blue";
  oneRect.debug=true;
  rectTwo.debug=true;
}

function draw() {
  background(255,255,255);
  oneRect.x=World.mouseX;
  oneRect.y=World.mouseY;
  console.log(oneRect.x-rectTwo.x);
  if(oneRect.x-rectTwo.x<oneRect.width/2+rectTwo.width/2 
  && rectTwo.x-oneRect.x<oneRect.width/2+rectTwo.width/2
  && rectTwo.y-oneRect.y<oneRect.height/2+rectTwo.height/2
  && oneRect.y-rectTwo.y<oneRect.height/2+rectTwo.height/2){
  oneRect.shapeColor="Green";
  rectTwo.shapeColor="Green";
  }
  else{
  oneRect.shapeColor="Blue";
  rectTwo.shapeColor="Blue";   
  }




  drawSprites();
}
