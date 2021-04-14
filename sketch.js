
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Ground,Paper,PaperIMG;
var Side1,Side2,Side3,Side2IMG;


function preload()
{
  PaperIMG=loadImage("paper.png/sprites");
  Side2IMG=loadImage("dustbingreen.png/sprites");
}

function setup() 
{
	createCanvas(800, 700);




	engine = Engine.create();
	world = engine.world;

	  
	Ground=new ground(400,680,800,10);
	Paper=new paper(200,675,24);
    Paper.addImage(PaperIMG);
	Side1=new side(500,620,10,100);
	Side2= new side(650,620,10,100);
    Side2.addImage(Side2IMG);
	Side3= new side(575,670,150,10);
	
	Engine.run(engine);
  
}
     
function draw() 
{
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 Ground.display();
 Paper.display();
 Side1.display();
 Side2.display();
 Side3.display();
 Keypressed();
 Engine.update(engine);

}
function Keypressed(){
    if (keyCode===UP_ARROW)
       {
           Matter.Body.applyForce(Paper.body,Paper.body.position,{x:80,y:-80});
       }
  }



