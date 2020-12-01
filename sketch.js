const World = Matter.World
const Engine = Matter.Engine
const Bodies = Matter.Bodies

var engine,world,ground,ball



function setup() {
  createCanvas(400,400);
 engine = Engine.create();
 world = engine.world;

var options = {
isStatic:true  
}

 ground = Bodies.rectangle(200,370,400,30,options);
 World.add(world,ground);
var options ={
  restitution:1.25
}
ball = Bodies.circle(150,150,30,options);
World.add(world,ball);
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode (CENTER);
rect(ground.position.x,ground.position.y,400,50);
  
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,30,30);
}
