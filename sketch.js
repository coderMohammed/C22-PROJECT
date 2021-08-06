
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground,left,right;

function preload()
{
	
}



function setup() {
	createCanvas(1000,600);


	engine = Engine.create();
	world = engine.world;



	//Create the Bodies Here.
	var ball_options={
		isStatic : false,
		restitution : 0,
		friction : 0,
		density : 1.2,
	}
	ball = Bodies.circle(50,30,20,ball_options);
	World.add(world,ball);

	Engine.run(engine);
	
	ground = new Ground(500,550,1000,50)
	left = new Ground(600,465,20,125)
	right = new Ground(850,465,20,125)

}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);

  background(0);
  
  drawSprites();

  ground.display();
  left.display();
  right.display();
  ellipse(ball.position.x,ball.position.y,20);
}

function keyPressed(){ 
	if(keyCode === UP_ARROW){ 
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:-0.7})
	}
}
