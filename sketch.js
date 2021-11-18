var background, backgroundImg;
var balloon, balloonImg;
var building1, building1Img;
var building2, building2Img;
var lamp, lampImg;
var bird, birdImg;
var restart, restartImg;
var gameOver, gameOverImg;
var balloonObs, balloonObsImg;
var topGround, topGroundImg;
var bottomGround, bottomGroundImg;


function preload(){
 backgroundImg= loadImage("assets/bg.png");
 balloonImg = loadAnimation("assets/balloon1.png", "assets/balloon2.png", "assets/balloon3.png");
 lampImg= loadImage("assets/obsBottom2.png");
 building1Img= loadImage("assets/obsBottom1.png");
 building2Img= loadImage("assets/obsBottom2.png");
 birdImg= loadImage("assets/obsTop2.png");
 balloonObsImg= loadImage("assets/obsTop2.png");
 restartImg= loadImage("assets/restart.png");
 gameOverImg= loadImage("assets/gameOver.png");

}

function setup(){
 createCanvas(400,400)

//background image
background= createSprite(160,160,40,40);
background.addImage( backgroundImg);


//creating top and bottom grounds
 topGround = createSprite(150,30,40,40);
 bottomGround = createSprite(150,350, 40,40);

      
//creating balloon     
balloon = createSprite(80,80,40,40);
balloon.addAnimation("balloonImg");



}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
           if(keyDown("SPACE")){
             balloon.velocityY -=10;
           }
         

          //adding gravity
           balloon.velocityY= velocityY + 4;
   
        drawSprites();
        
}