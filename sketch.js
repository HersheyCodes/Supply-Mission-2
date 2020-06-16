var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box1,box2,box3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	engine = Engine.create();
	world = engine.world;
	createCanvas(800, 700);
	rectMode(CENTER);
	box1=Bodies.rectangle(width/2,height-50,200,20,{isStatic:true})
	box2=Bodies.rectangle(width/2-100,height-100,20,100,{isStatic:true})
	box3=Bodies.rectangle(width/2+100,height-100,20,100,{isStatic:true})
	World.add(world,box1)
	World.add(world,box2)
	World.add(world,box3)

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	//groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor=color(255)




	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	
	World.add(world, packageBody);
	

	//Create a Ground


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  fill("red")
  noStroke();
  rect(box1.position.x,box1.position.y,220,20)
  rect(box2.position.x,box2.position.y,20,80)
  rect(box3.position.x,box3.position.y,20,80)

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    Matter.Body.gravity=3;
  }
}



