var star,starImg,stars,rocket,rocketImg,space,spaceImg;
var distance=0;
var gameState = "play"

function preload(){
starImg=loadImage("star.png");
spaceImg=loadImage("space.png");
rocketImg=loadImage("rocket.png");
}

function setup() {
 createCanvas(300,300);


 stars=new Group();
 space = createSprite(150,150);
 space.addImage(spaceImg);
 space.scale=2

 rocket=createSprite(150,200);
 rocket.addImage(rocketImg);
 rocket.scale=0.35

}

function draw() {
    textSize(30);
    fill("white")
    text("Distance: "+ distance,5,5);
    background(200);
    if(gameState="play"){
    distance = distance + Math.round(getFrameRate()/50);  
   
 spawnStars();
 drawSprites();
 if(stars.isTouching(rocket)){
    rocket.destroy();
    gameState="end"
    }
  if (keyDown(LEFT_ARROW)){
    rocket.x-=3;
  }
  if (keyDown(RIGHT_ARROW)){
    rocket.x+=3;
  }
}
  if(gameState="end"){
    
    text("Game Over",150,150);
  }
}

function spawnStars(){
   
    if(frameCount%200===0){
        star=createSprite(random(5,300),-50)
        star.addImage(starImg);
        stars.add(star);
        star.scale=0.1
        star.velocityY=1
        star.lifetime=400
    }
}