
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var backgroundImg,platform;

var ron,roni,ronii;

function preload(){

ronii=loadAnimation("ron21.png");
roni=loadAnimation("ron23.png","ron23.png","ron22.png","ron22.png","ron24.png","ron24.png");
}

function setup()
{createCanvas(1000,500);
ron=createSprite(50,50,10,10);
ron.addAnimation("stand",ronii);
ron.addAnimation("run",roni);
ron.scale=0.35;




}
function draw(){
background("white");
movement();
textSize(20)
fill("blue")
text("The Diamond Heist",400,20)

drawSprites();
}
function movement(){
if(keyDown("UP_ARROW"))
{
ron.y=ron.y-2;
}
if(keyDown("DOWN_ARROW"))
{
ron.y=ron.y+2;
}
if(keyDown("LEFT_ARROW"))
{
ron.x=ron.x-2;
}
if(keyDown("RIGHT_ARROW"))
{
ron.changeAnimation("run");
ron.x=ron.x+2;

}

}