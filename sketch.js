const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var bobDiameter,bobX,bobY;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobDiameter = 80;
	bobX = width/2;
	bobY = height/4+300;
	ground = new Ground(500,100,500,20);
	bob1 = new Bob(bobX-bobDiameter*2,bobY,bobDiameter);
	bob2 = new Bob(bobX-bobDiameter,bobY,bobDiameter);
	bob3 = new Bob(bobX-bobDiameter,bobY,bobDiameter);
	bob3 = new Bob(bobX,bobY,bobDiameter);
	bob4 = new Bob(bobX+bobDiameter,bobY,bobDiameter);
	bob5 = new Bob(bobX+bobDiameter*2,bobY,bobDiameter);
	rope1 = new Rope(bob1.body,ground.body,-bobDiameter*2,0);
	rope2 = new Rope(bob2.body,ground.body,-bobDiameter*1,0);
	rope3 = new Rope(bob3.body,ground.body,0,0);
	rope4 = new Rope(bob4.body,ground.body,bobDiameter*1,0);
	rope5 = new Rope(bob5.body,ground.body,bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(bob1.body, {x: mouseX , y: mouseY});
}