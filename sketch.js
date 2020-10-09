
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var rect1,rect2,rect3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
 
	ground = new Ground(400,height,1000,21)
rect1 = new Dustbin(600,630,20,100)
rect2 = new Dustbin(750,630,20,100)
rect3 = new Dustbin(675,700,173,20)
	paper = new Paper(150,500,50);
	//Create the Bodies Here.
	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  Engine.update(engine);
  paper.display();
  ground.display();
  rect1.display();
  rect2.display();
  rect3.display();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x: 100,y: -100})
	}
}

