
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var redbox1,redbox2,redbox3;


function preload()
{
	



}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	  ball= new Ball(100,100,30,30);

	  redbox1 = new Redbox(900,420,20,130);
	redbox2 = new Redbox(790,485,250,20);
	redbox3 = new Redbox(670,450,20,130);
   
	ground = new Ground(600,height,1200,20)


	  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  
  ball.display();


  redbox1.display();
  redbox2.display();
  redbox3.display();
  ground.display();

  


}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	  
		Matter.Body.applyForce (ball.body,ball.body.position,{x:90,y:-90});



	}
	}
   
   
  

 




