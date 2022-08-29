var spaceShip, meteorites, space, meteoritesGroup;

var spaceShipSound

var gameOver,restart;
//GameStates
var PLAY = 1;

var END = 1;

var meters = 0;
     
var gameState

function preload(){
spaceShipSound = loadSound("Rocket.mp3"); 
spaceShip = loadImage("SPACESHIP.png");
 meteorites = loadImage("METEORIDS.png");
 space = loadImage("SPACE.png");
gameOverImg = loadImage("gameover.png");

}
function setup() {
createCanvas(windowWidth, windowHeight);
// Moving background
space = createSprite(width-50,100,10,10);
space.addImage(space);
space.velocityY = 4;

//creating spaceship
spaceShip = createSprite(50,height-70,20,50);
spaceShip.addImage(spaceShip);
spaceShip.setCollider('rectangle',50,70,20,50)
spaceShip.scale=0.08;
  
//gameover 
gameOver = createSprite(width/2,height/2- 50);
gameOver.addImage(gameOverImg);
//restart


gameOver.visible = false;
gameOver.visible = false;

//meteorites group
meteorites = new Group();

meters = 0;
}

function draw() {

        if (gameState===PLAY){
            score = score + Math.round(getFrameRate()/60);
            space.velocityY = -(6 + 3*meters/100);
              spaceShipSound.play( )
               touches = [];
                spaceShip.Y = mouse.Y
            
      //background reset
  if(space.y > 400 ){
    space.y = height/2;
  }

  createMeteorites();

  //meteorites script
  if (meteoritesGroup.isTouching(spaceShip)){
    gameState = END;
  }
}
  if(gameState === END){
    spaceShip.destroyEach();
    meteorites.destroyEach();

    spaceShip.setVelocityEach(0);
    meteorites.setVelocityEach(0);
    space.setVelocityEach(0);

  //lifetime for they never dies X_X
  meteoritesGroup.setLifetimeEach(-1);
  }

drawSprites();




textSize(20);
fill(255);
text("meters: "+ meters,10,30);

}

  
  function createMeteorites() {
    if(frameCount % 60 === 0) {
      var meteorites = createSprite(600,height-95,20,30);
      meteorites.setCollider('square',70,580,20,20);
      //scale and lifetime
      meteorites.scale = 0.3;
      meteorites.lifetime = 300;
      meteorites.velocityY = 3;
      meteoritesGroup.add(meteorites);

    }}
     