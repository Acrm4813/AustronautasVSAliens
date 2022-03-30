var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2;

var track, car1_img, car2_img;

function preload(){
  track = loadImage("../images/background2.png");
  car1_img = loadImage("../images/sprite_0.png");
  car2_img = loadImage("../images/sprite_0.png");
  ground = loadImage("../images/background1.png");
  animationImg = loadAnimation("../images/imagen1.jpeg","../images/imagen1.jpeg","../images/imagen2.jpeg","../images/imagen2.jpeg","../images/imagen3.jpeg","../images/imagen3.jpeg","../images/imagen4.jpeg","../images/imagen4.jpeg","../images/imagen5.jpeg","../images/imagen5.jpeg","../images/imagen6.jpeg","../images/imagen6.jpeg","../images/imagen7.jpeg","../images/imagen7.jpeg","../images/imagen8.jpeg","../images/imagen8.jpeg")
}

function setup(){
  canvas = createCanvas(1900,950);
  database = firebase.database();
  animation = createSprite(945,475,100,100);
  animation.addAnimation("animacion" ,animationImg);
  animation.lifetime = 100;
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
  drawSprites();
}
