var player, ground;
var wall1,wall2;


function preload(){


}

function setup() {
  createCanvas(1000,600);
 //createSprite(400, 200, 50, 50);

 player = new Player(400,200,50,50)
 ground = createSprite(500,600,1000,20)
}

function draw() {
  background("gray"); 
  
  
  player.display();
  player.movement();

  //ground.collide(player)

  spawnWalls()

  drawSprites();
}

function spawnWalls(){

    if(frameCount %50 === 0){

      wall1 = createSprite(1009,20,20,random(20,500))
      wall2 = createSprite(1009,580,20,random(20,500))

      wall1.shapeColor = "red"
      wall2.shapeColor = "green"

      wall1.velocityX = -10
      wall2.velocityX = -10 
      
    }

}