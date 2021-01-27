
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;

var paper_image,dustbin_image;

function preload(){
	
}

function setup() {
	createCanvas(1200, 700,displayWidth-2,Height=200);
	rectMode(CENTER);

    this.loadImage("paper")

	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1100,650);
	paperObject=new paper(200,450,70);
	groundObject=new ground(width/2,670,width,20);
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
 
 
  groundObject.display();
  dustbinObj.display();
  paperObject.display();
 
  
  
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:190,y:-145});

  
	}
}




