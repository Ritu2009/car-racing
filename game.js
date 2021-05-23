class Game{
    constructor(){
    }
    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    
      }
    
      update(state){
        database.ref('/').update({
          gameState: state
        });
      }
      
      async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          form = new Form()
          form.display();
        }
    
        car1 = createSprite(200,100);
        car1.addImage(car1Img);
        car1.scale=0.2;
        car2 = createSprite(200,300);
        car2.addImage(car2Img);
        car2.scale=0.4;
        car = [car1,car2];
      }
      play(){
        form.hide();
        Player.getPlayerInfo();
        background("golden");
        image(track,0,0,displayWidth*5,displayHeight)
        if(allPlayers!== undefined){
          var index = 0;
          var x,y=140;
          for(var plr in allPlayers){
            index=index+1;
            y=y+200;
            x=displayWidth-allPlayers[plr].distance;
            car[index-1].x=x;
            car[index-1].y=y;
            if(index === player.index){
              fill("red");
              ellipse(x,y,60,60);
              camera.position.x=car[index-1].x
              camera.position.y=displayHeight/2;
            }
          }
        }  
        if(keyIsDown(RIGHT_ARROW)&& player.index!== null ){
          player.distance-=10;
          player.update();
        }
        drawSprites();
      }
}