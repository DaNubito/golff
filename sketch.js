var golfBall;
var golfBackground;
var golfGrass;
var engine;
var world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
  	golfBall = ("./Assets/ball.png")
    golfBackground = ("./Assets/golfbackground.jpg")
	golfGrass = ("./Assets/golfgrass.jpg")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.World;


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(golfBackground);
  image(golfBackground,width/2,height/2,490,690);
  
  //drawSprites();
 
}

