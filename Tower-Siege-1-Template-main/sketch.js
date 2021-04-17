const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(600,300,250,10);
 
  //level one
  block1 = new Block(500,275,30,40);
  block2 = new Block(530,275,30,40);
  block3 = new Block(560,275,30,40);
  block4 = new Block(590,275,30,40);
  block5 = new Block(620,275,30,40);
  block6 = new Block(650,275,30,40);
  block7 = new Block(680,275,30,40);
  //level two
  block8 = new Block(530,235,30,40);
  block9 = new Block(560,235,30,40);
  block10 = new Block(590,235,30,40);
  block11 = new Block(620,235,30,40);
  block12 = new Block(650,235,30,40);
  //level three
  block13 = new Block(560,195,30,40);
  block14 = new Block(590,195,30,40);
  block15 = new Block(620,195,30,40);
  //top
  block16 = new Block(590,155,30,40);

  ball = Bodies.circle(150, 150, 20);
  World.add(world, ball);

  polygon = Bodies.circle(150, 150, 20);
  World.add(world, polygon);
  
  slingShot = new SlingShot(this.ball, {x: 350, y: 150});

}
function draw() {
  background("lightblue"); 
  Engine.update(engine);
 
  textSize(20);
  fill("lightyellow");

  strokeWeight(2);
  stroke(15);

  ground.display();
  stand1.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
 
  fill ("blue");
  text("Drag the line and release to hit the boxes", 250, 100);

  imageMode(CENTER);
  image(polygon_img, ball.position.x, ball.position.y, 40, 40);

  ellipse(ball.position.x, ball.position.y, 20);
  slingShot.display();

}

function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x:mouseX, y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}