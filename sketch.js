var PLAY = 1;
var END = 0;
var gameState = PLAY;
var monkey , monkey_running,monkey_stop;
var banana1,banana2,banana3,bananaImage,obstacleImage;
var ground,score=0,obstaclesGroup;
var lol;
function preload(){
monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
}



function setup() {
createCanvas(800,530);
lol = createSprite(-20,300,10,2000)
  ground = createSprite(400,520,800,150); 
ground.shapeColor="coral";
ground2 = createSprite(400,475,800,50); 
ground2.visible = false;
monkey = createSprite(50,405,20,20);
monkey.addAnimation("running",monkey_running);
monkey.scale = 0.15;
bannana1 = createSprite(750,random(260,425),40,40);
bannana2 = createSprite(1000,random(260,425),40,40);
bannana3 = createSprite(1300,random(260,425),40,40);
bannana1.addImage(bananaImage);
bannana2.addImage(bananaImage);
bannana3.addImage(bananaImage); 
bannana1.scale=0.1;
bannana2.scale=0.1;
bannana3.scale=0.1;
obstaclesGroup = createGroup();
}


function draw() {
background("green");
if(gameState===PLAY){
   jump();
monkey.collide(ground2); 
bannana1.velocityX=random(-5,-10);
bannana2.velocityX=random(-5,-10);
bannana3.velocityX=random(-5,-10);
monkeytouch(); 
returnback();
obstacles()
destroy();
drawSprites();  
} 
if(gameState===END){
background("yellow");
textSize(50);
fill("red");
text("Monkey has been caught!!!",50,200); 
fill("black ");
text("Sorry Naughty Monkey!!!",50,250); 
text("press R to restart",130,300); 
}
textSize(30);
fill("black");
text("bannana ate="+score,220,100);
reallyrestart();
}
function jump(){
if(keyDown("space")&&monkey.isTouching(ground)){
monkey.velocityY=-25;
}  
 monkey.velocityY = monkey.velocityY + 1.5 ; 
}
function monkeytouch(){
if(monkey.isTouching(bannana1)){
bannana1.x=750;   
bannana1.y=random(260,425) 
bannana1.velocityX=random(-5,-10);
score = score+1;
}
if(monkey.isTouching(bannana2)){
bannana2.x=1000;   
bannana2.y=random(260,425) 
bannana2.velocityX=random(-5,-10);
score = score+1;
}
if(monkey.isTouching(bannana3)){
bannana3.x=1300;   
bannana3.y=random(260,425) 
bannana3.velocityX=random(-5,-10);
score = score+1;
}
}
function returnback(){
if(lol.isTouching(bannana1)){
bannana1.x=750;   
bannana1.y=random(260,425) 
bannana1.velocityX=random(-5,-10);
}  
if(lol.isTouching(bannana2)){
bannana2.x=1000;   
bannana2.y=random(260,425) 
bannana2.velocityX=random(-5,-10);
}
if(lol.isTouching(bannana3)){
bannana3.x=1300;   
bannana3.y=random(260,425) 
bannana1.velocityX=random(-5,-10);
}
}
function obstacles(){

  if (frameCount % 50=== 0) {
   var obstacle = createSprite(1000,430,40,10);
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.3 ;
    obstacle.velocityX = -8;
    obstacle.lifetime = 300;  
    obstacle.setCollider("circle",0,0,160);
    obstacle.debug = true;
    obstaclesGroup.add(obstacle);
  }
}
function destroy(){
if(monkey.isTouching(obstaclesGroup)){
gameState=END;
}  
}
function reallyrestart(){
if(keyDown("R")&&gameState===END){
gameState=PLAY; 
score=0;
obstaclesGroup.destroyEach();
monkey.x=50; 
monkey.y=405; 
bannana1.x=750;   
bannana1.y=random(260,425) 
bannana2.x=1000;   
bannana2.y=random(260,425)
bannana3.x=1300;   
bannana3.y=random(260,425)
}
}