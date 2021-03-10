var ground;
var dustbin,dustbin4;
var paper,paper2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload(){
dustbin = loadImage("dustbin.png")
paper = loadImage("paper.png");
}
function setup() {
	createCanvas(1430, 750);


	engine = Engine.create();
	world = engine.world;
    
	
	 

	//Create the Bodies Here.
	
	
	
	
	
	dustbin4 = createSprite(1115,655,10,150)
	dustbin4.addImage(dustbin)
	dustbin4.scale=0.45;

	
	
	dustbin1 = new Dustbin(1070,675,10,110);
	dustbin2 = new Dustbin(1115,725,100,10);
	dustbin3 = new Dustbin(1160,675,10,110);
	ground = new Ground(500,740,2000,20);
	
	paper1 = new Paper(50,620,17);
	chain1 = new Chain(paper1.body,{x:150 , y:450});
	

	
	
}


function draw() {
	
	
	background(225);
  Engine.update(engine);
  paper1.display();
  ground.display();
  
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  chain1.display();
 
  
  
  
  
  
  
 
  
 
  
  
  

  drawSprites();

  
 
}

function mouseDragged(){
	Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY})
 }
 function mouseReleased(){
	 chain1.fly();
 }


