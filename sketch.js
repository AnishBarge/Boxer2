
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var title,button,button2,start;
var name1
var player,robot;
var gameState=0;
var count=1
var timer=600;
var score=0;
var score1=0
var r
function preload(){
  bgImage=loadImage("bg.png")
  dodge=loadAnimation("dodge.png")
  punch=loadAnimation("punch1.png")
  punch1=loadAnimation("punch2.png")
  gameover=loadAnimation("gameover.png")
  start1 = loadAnimation("start.png")
  robot1=loadAnimation("sprite_0.png")
  robot2=loadAnimation("sprite_1.png")
  robot3=loadAnimation("spri.png")
  robo=loadAnimation("spr.png")
}
function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  
  title=createElement("h2")
  title.html("BOXING GAME")
  button=createButton("SINGLE PLAYER")
  title.position(450,10)
  button.position(420,80)
  button2=createButton("MULTI PLAYER")
  button2.position(550,80)
 button.mousePressed(()=>{
    button.hide()
    button2.hide()
    start=createButton("START")
  input=createInput("Name")
    input.position(350,10)
    name1=input.value()
    start.position(300,10)
    start.mousePressed(()=>{
      input.hide()
      start.hide()
      player=createSprite(400,300,10,10)
player.addAnimation("start",start1)
      robot=createSprite(500,430,10,10)
      robot.addAnimation("robotstart",robot1)
      gameState=1
      
      })
  })
} 


function draw() {
  background("white");
  if(gameState==0){
    textSize(20)
    fill("blue")
    text("'space' is use for dodge only can use once",200,250)
    text("'up arrow'key is used for upper punch can be used once ",200,350)
    text("'down arrow'key is used for lower punch",200,450)
    text("these instructionns are both for singleplayer and multiplayer",200,600)
  }  
  console.log(r)
  if(gameState==1){
   background(255,255,102)
  
    if(keyDown("right")){
      player.x=player.x+1
      robot.x=robot.x-1
    }
    r=Math.round(random(1,100))
    if(timer===0){
      gameState=2
    }
    if(timer>=0){
      timer=timer-1
    }
    text("timer:"+timer,300,50)
   
    if(player.y==150){
      score=score+100

    }
 
    
if(r==5){
    robot.addAnimation("normal",robo)
    robot.changeAnimation("normal",robo)
    score=score-100
  }

  
    
    text("score:"+score,300,100)
    text("robotscore"+score1,300,200)
    if(keyDown("up")){
      player.addAnimation("pun",punch1)
      player.changeAnimation("pun",punch1)
      score=score+50
      robot.addAnimation("ros",robot3)
      robot.changeAnimation("ros",robot3)
      score1=score1+50
    }
    if(keyDown("down")){
      player.addAnimation("punc",punch)
      player.changeAnimation("punc",punch)
      score=score+20
      robot.addAnimation("punch1",robot1)
    robot.changeAnimation("punch1",robot1)
    score1=score1+20
    }
    if(keyWentDown("space")&& count==1){
      player.addAnimation("dod",dodge)
      player.changeAnimation("dod",dodge)
     count=0
     score1=score1-100
    }
   
    if(keyWentUp("space")){
   player.changeAnimation("sta",punch)
}  }
if(gameState===2){
player.addAnimation("over",gameover)
player.changeAnimation("over",gameover)
robot.addAnimation("robotover",robot2)
robot.changeAnimation("robotover",robot2)
if(score>score1){
  text("Player is winner",300,300)
}
else{
  text("Robot is winner",300,300)
}
}


  drawSprites();
}
