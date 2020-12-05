var paper,ground,dustbin1,dustbin2,dustbin3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
ground = Bodies.rectangle(800,665,1600,50,{isStatic:true})
World.add(world,ground)
	//Create the Bodies Here.
var paperOptions={
isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2



}
paper = Bodies.circle(200,600,40,paperOptions)
World.add(world,paper)
	Engine.run(engine);
  dustbin1 = Bodies.rectangle(1200,600,20,100,{isStatic:true})
  World.add(world,dustbin1)
  dustbin2= Bodies.rectangle(1300,650,200,20,{isStatic:true})
  World.add(world,dustbin2)
  dustbin3= Bodies.rectangle(1400,600,20,100,{isStatic:true})
  World.add(world,dustbin3)
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("brown")
  rect(ground.position.x,ground.position.y,1600,50)
  fill("pink")
  ellipseMode(RADIUS)
  ellipse(paper.position.x,paper.position.y,40,40)
  fill("red")
  rect(dustbin1.position.x,dustbin1.position.y,20,100)
  fill("red")
  rect(dustbin2.position.x,dustbin2.position.y,200,20)
  fill("red")
  rect(dustbin3.position.x,dustbin3.position.y,20,100)
  drawSprites();
 
}
function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(paper,paper.position,{x:85,y:-85})



}



}


