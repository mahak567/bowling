const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var slingShot;
var ball;
var bowl1,bowl2,bowl3,bowl4,bowl5,bowl6;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ball = Bodies.circle(70,200,50);
    World.add(world,ball);
  slingShot = new Slingshot(ball,{x:100,y:200});
  bowl1= new bowling(600,150,40,80);
  bowl2= new bowling(550,220,40,80);
  bowl3= new bowling(600,300,40,80);
  bowl4= new bowling(650,350,40,80);
  
  bowl6= new bowling(670,100,40,80);
  
}

function draw() {
  background("black"); 
  Engine.update(engine);
  slingShot.display(); 
  bowl1.display();
  bowl2.display();
  bowl3.display();
  bowl4.display();

  bowl6.display();
  fill(5, 100, 255);
  circle(ball.position.x,ball.position.y,40)
}
function mouseDragged(){
  Matter.Body.setPosition(ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode===32){
      slingshot.attach(ball);
  }
}