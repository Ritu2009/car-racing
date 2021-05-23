var player,form,game;
var database;
var allPlayers;
var track,car1,car2,car;
var car1Img,car2Img;
var playerCount,gameState=0;

function preload(){
car1Img = loadImage("car1.png");
car2Img = loadImage("car2.png");
track = loadImage("track.jpg");
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}

function draw() {
 if(playerCount === 2){
   game.update(1);
 }
 if(gameState === 1){
   clear();
   game.play();
 }
}