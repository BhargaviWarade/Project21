const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine,world;
var ball,groundObj,leftSide,rightSide;
function setup() {
	createCanvas(500, 500);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	//Create the Bodies Here.
	{
		var ball_options={
			isStatic:false,
			restitution:0.3,
			friction:0,
			density:1.2
		}
	}
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

 
  groundObj=new Ground(width/2,498,width,20);
  leftSide= new Ground(300,450,10,120);
  rightSide= new Ground(450,450,10,120);

  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}


function draw() {
  background(0);
  fill("white");

  //creating the bouncy ball
  ellipse(ball.position.x,ball.position.y,10);

  

//creating the walls
  fill ("yellow");
  groundObj.display();
  leftSide.display();
  rightSide.display();
  
  
  drawSprites();
 
}
function keyPressed()
{
  if (keyCode===UP_ARROW)
	{
		//SYNTAX->Matter.Body.applyForce(body, position, force)
		Matter.Body.applyForce(ball,ball.position,{x:40,y:-40});//
	}
}