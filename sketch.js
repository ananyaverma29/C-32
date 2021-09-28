const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball;
var blower;
var blowerMouth;
var button;
var airBlowerSound;
var cartoon;
var airBubble;
function preload()
{
  airBlower = loadSound("air.wav");
  cartoon = loadImage("BlowingAirBubble.png");
}




function setup() {
  var canvas = createCanvas(2000,750);
  airBubble = createSprite(700, 400, 100,100);
  airBubble.addImage(cartoon);
  airBubble.scale = 1;

  engine = Engine.create();
  world = engine.world;
  

  ball = new Ball(width / 2 + 80, height / 2 - 80, 80, 80);
  blower = new Blower(width / 2 - 50, height / 2 + 50, 150, 20);
  blowerMouth = new BlowerMouth(width / 2 + 70, height / 2 + 20, 100, 90);
  button = createButton("Click to Blow");
  button.position(width / 2, height - 100);
  button.class("blowButton");

  button.mousePressed(blow);

  //buttonPressed(blow);
  
  //button = mousePressed(blow);
  
  //button.mousePressed();

}

function draw() {
  background(59);
  Engine.update(engine);

  blower.show();
  push();
  fill("lightblue");
  ball.show();
  pop();
  blowerMouth.show();
  drawSprites();
}

function blow() {
  airBlower.play();
  airBlower.setVolume(0.2);
  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:-0.05});

  //Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:0.05});
  
 // Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0.05, y:0.05});
  
  //Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:-0.05, y:0});

}

