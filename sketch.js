
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;



function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;
roofObj=new Roof(width/2,height/4,width/7,20)
bobDiameter=40;
bobposX=width/2
bobposY=height/4+500
b1=new Bob(bobposX-bobDiameter*2,bobposY,bobDiameter)
b2=new Bob(bobposX-bobDiameter,bobposY,bobDiameter)
b3=new Bob(bobposX,bobposY,bobDiameter)
b4=new Bob(bobposX+bobDiameter,bobposY,bobDiameter)
b5=new Bob(bobposX+bobDiameter*2,bobposY,bobDiameter)
var render=Render.create({element:document.body,engine:engine,options:{
	width:1200,
	height:700,
	wireframes:false
}})
r1=new Rope(b1.body,roofObj.body,-bobDiameter*2,0)
r2=new Rope(b2.body,roofObj.body,-bobDiameter*1,0)
r3=new Rope(b3.body,roofObj.body,0,0)
r4=new Rope(b4.body,roofObj.body,bobDiameter*1,0)
r5=new Rope(b5.body,roofObj.body,bobDiameter*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  

 roofObj.display();
 r1.display();
 r3.display();
r2.display();
 r4.display();
 r5.display();
 b1.display();
  b2.display();
   b3.display();
  b4.display();
   b5.display();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(b1.body,b1.body.position,{x:-50,y:-45})
	}
}
function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}

