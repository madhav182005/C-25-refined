var ballSprite, ballIMG; 
var stick1, stick2, stick3, stick1body, stick2body, stick3body; 
var ballBody, ground; 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
 ballIMG=loadImage("paper.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	ballSprite=createSprite(100, 620, 10); 
	ballSprite.addImage(ballIMG); 
	ballSprite.scale=0.3; 
    var options = { 
		isStatic: false,
		restitution: 0.3, 
		friction: 0.5, 
		density: 1.2 
	}
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	stick1 = createSprite(width/2, height-50, 200, 20);
	stick1.shapeColor = "red";
	stick2 = createSprite(300, height-90, 20, 100);
	stick2.shapeColor = "red";
	stick3 = createSprite(500, height-90, 20, 100);
	stick3.shapeColor = "red";

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background('white');

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on
	   //packageSprite.velocityY = 3;
	   //packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:false});
	Matter.Body.applyForce(ballObject.body, ballObject.body.position, {x:85, y: -85}); 
	}
   }
   

