const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
const Constraint=Matter.Constraint;
var engine,world;
var ground;

function setup() {
  createCanvas(displayWidth,displayHeight-100);

 engine=Engine.create();
 world=engine.world;
ground=new Ground(displayWidth/2,displayHeight-150,displayWidth,100);

}

function draw() {
  background("yellow"); 
  Engine.update(engine); 
  ground.display();
  drawSprites();
}