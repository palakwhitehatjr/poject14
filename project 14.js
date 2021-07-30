//creating variables of every  object
var bow, arrow, redballoon, pinkballoon, blueballoon, greenballoon, background;
var bowimage, arrowimage, redballoonimage, pinkballoonimage, blueballoonimage, greenballoonimage, background1image;
var score =0;
// loading the animation and images 
function preload() {
  backgroundimage = loadImage("background0.png");
  bowimage = loadImage("bow0.png");
  arrowimage = loadImage("arrow0.png");
  redballoonimage = loadImage("red_balloon0.png");
  pinkballoonimage = loadImage("pink_balloon0.png");
  greenballoonimage = loadImage("green_balloon0.png");
  blueballoonimage = loadImage("blue_balloon0.png");
}

function setup() {
  // creating background sprite and giving the image
  createCanvas(500, 400);
  background1 = createSprite(0, 0, 600, 600);
  background1.addImage(backgroundimage);
  background1.scale = 2;
  //creating bow sprite
  bow = createSprite(410, 300, 1, 1);
  bow.addImage(bowimage);
  bow.scale = 1;
}

function draw() {
  //making  infinite scrolling for background 
  background1.velocityX = -2;
  if (background1.x < 0) {
    background1.x = background1.width / 2;
  }
  bow.y = World.mouseY;
  if (keyDown("space") ) {
    createarrow();
    if (arrow.x < 0 ) {
    arrow.x = 470
    arrow.y = bow.y
    arrow.velocityX = 0
     }
  }
  var selectballoon = Math.round(random(1, 5));
  if (frameCount % 80 === 0) {
    if (selectballoon == 1) {           
      redballoon();
    } else if (selectballoon == 2) {
      pinkballoon();
    } else if (selectballoon == 3) {
      greenballoon();
    } else if (selectballoon == 4) {
      blueballoon();
    }
  }
  //creating sprite objects
  drawSprites();
  text.size=20;
  text("score:"+score,270,30);
}

function redballoon() {
  var redballoon = createSprite(0, Math.round(random(20, 370)), 10, 10);
  redballoon.addImage(redballoonimage);
  redballoon.scale = 0.1;
  redballoon.velocityX = 3
  redballoon.lifetime=166;
}

function pinkballoon() {
  var pinkballoon = createSprite(0, Math.round(random(20, 370)), 10, 10);
  pinkballoon.addImage(pinkballoonimage);
  pinkballoon.scale = 1.3;
  pinkballoon.velocityX = 3
  pinkballoon.lifetime=166;
}

function greenballoon() {
  var greenballoon = createSprite(0, Math.round(random(20, 370)), 10, 10);
  greenballoon.addImage(greenballoonimage);
  greenballoon.scale = 0.1;
  greenballoon.velocityX = 3;
  greenballoon.lifetime=166;
}

function blueballoon() {
  var blueballoon = createSprite(0, Math.round(random(20, 370)), 10, 10);
  blueballoon.addImage(blueballoonimage);
  blueballoon.scale = 0.1;
  blueballoon.velocityX = 3
  blueballoon.lifetime=166;
}
function createarrow(){
   //creating arrow sprite
  arrow = createSprite(450, 300);
  arrow.addImage(arrowimage);
  arrow.scale = 0.4;
     arrow.y = bow.y
    arrow.velocityX = -4;
  arrow.lifetime= 150;
}