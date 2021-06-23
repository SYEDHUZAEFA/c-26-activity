const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2,box3,box4;
var ground;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    box1=new Box(200,200,50,50);   
    box2=new Box(230,50,70,90);  
    box3=new Box(300,50,70,90);  
    box4=new Box(300,200,50,90);  

    ground=new Ground(200,380,1200,10)

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();

}

