
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	paper1 = new Paper(100,300,10);
	dustbin = new Dustbin(400,650,200,20)
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display()
  
  drawSprites();
 
}



