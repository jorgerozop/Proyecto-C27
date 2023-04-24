
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var wedge;
var angle=60;
var poly;
var boxes=[];
var canvas;
var backgroundImage ;

function preload() {
  backgroundImage = loadImage("fondoJorge.png");
}

function setup() {

  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  var option={
    isStatic:true
  };
  ground=Bodies.rectangle(windowWidth/2,350,800,20,option);
  World.add(world,ground);
  box1 = new Box(200,100,50,50);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}
function mousePressed(){
  boxes.push(
    
    //new Box(50,50,50,50)
    
    new Box(mouseX,mouseY,50,50)
    

    //new Box(50,50,mouseX,mouseY)
    
    //new Box(mouseY,mouseX,50,50)  
    
    )
    
}

function draw() 
{
  background(backgroundImage);
  rect(ground.position.x,ground.position.y,800,20);
  Engine.update(engine);
  for(var i=0;i<boxes.length;i++) {
  boxes[i].show();}
  

  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}