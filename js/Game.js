class Game {
  constructor() {

  }
  getState(){
    var gameStateRef = database.ref("gameState")
    gameStateRef.on("value" , function(data){
      gameState = data.val()
    });
  }
  update(state){
    database.ref("/").update({
      gameState:state
    })
  }
  
  start() {
    form = new Form();
    form.display();
    player = new Player();
    playerCount = player.getCount()
    car1 = createSprite(width/2 - 50,height-100);
    car2 = createSprite(width/2 + 100,height-100);
    car1.scale = 0.09;
    car2.scale = 0.09;
    car1.addImage(car1Image);
    car2.addImage(car2Image);
    cars = [car1,car2]

  }
  hideElements(){
    form.hide()
    form.titleImg.position(40,50);
    form.titleImg.class("gameTitleAfterEffect")
  }
  play(){
    this.hideElements()
    Player.getPlayersInfo();
     if (allPlayers !== undefined) 
      { image(trackImage, 0, -height * 5, width, height * 6); 
        drawSprites(); } } }
  

