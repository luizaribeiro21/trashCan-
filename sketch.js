
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject, paper
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	paper = new Paper (100,370,80,60)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  if (keyDown (UP_ARROW)){
	  Matter.Body.applyForce(paper.body,paper.body.position, {x:100,y:-145})
  }

  groundObject.display();
  dustbinObj.display();

  paper.display (); 

}

