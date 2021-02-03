var VI, HA, AN
var Vi, Ha, An
var stone, stone2, stoneImg
var create, createImg
var space, tell, tellImg, space2, space3, space4, space5
var story, storyImg
var portal, portalImg
var astro, astroImg
var button, buttonImg, goal, goalImg
var race, raceImg, ship, shipImg, ship2, shipImg
var instruct, instructImg, instruct1, instruct1Img
var back, backImg
var themeSound
var shipSound
var start, startButton
var asteroids
var collect, collect2, collectImg, collect2Img
var congrats, congratsImg
var cover1, cover2, cover3, coverImg, cover2Img, cover3Img
var spaceSound1, spaceSound2
var level, levelButton
var text1, text1Image, text2, text2Image, text3, text3Image, text4, text4Image, text5, text5Image
var playerScore = 0
var player2Score = 0

function preload(){
themeSound = loadSound("theme.mp3")
shipSound = loadSound("shipSound.mp3")
spaceSound1 = loadSound("spaceSound1.mp3")
spaceSound2 = loadSound("spaceSound2.mp3")
Vi = loadImage("Vi.png")
    Ha = loadImage("Ha.png")
An = loadImage("An.png")
stoneImg = loadImage("stone.png")
createImg = loadImage("create.png")
space = loadImage("space.png")
space2 = loadImage("space2.png")
space3 = loadImage("space3.png")
space4 = loadImage("space4.png")
space5 = loadImage("space5.png")
tellImg = loadImage("tell.png")
storyImg = loadImage("play.png")
portalImg = loadImage("portal2.png")
astroImg = loadImage("astro.png")
buttonImg = loadImage("button.png")
goalImg = loadImage("goal.png")
raceImg = loadImage("race.png")
shipImg = loadImage("ship.png")
instructImg = loadImage("instruct.png")
instruct1Img = loadImage("instruct1.png")
backImg = loadImage("back.png")
start = loadImage("sound.png")
collectImg = loadImage("collect.png")
collect2Img = loadImage("collect2.png")
congratsImg = loadImage("congrats.png")
coverImg = loadImage("cover.png")
cover2Img  = loadImage("cover2.png")
cover3Img = loadImage("cover3.png")
levelButton = loadImage("level.png")
text1Image = loadImage("text1.png")
text2Image = loadImage("text2.png")
text3Image = loadImage("text3.png")
text4Image = loadImage("text4.png")
text5Image = loadImage("text5.png")
}

function setup(){
createCanvas(windowWidth, windowHeight)   
  


fill("white")
cover1 = createSprite(1300, 180, 10, 10)
cover1.addAnimation("covering", coverImg)
cover1.addAnimation("covering2", cover2Img)
cover1.addAnimation("covering3", cover3Img)

VI = createSprite(windowWidth/2+200, windowHeight/2-300, 50, 50)
VI.addAnimation("Vi", Vi)
VI.scale = 0.5
VI.velocityX = -10
HA = createSprite(windowWidth/2+200, windowHeight/2-240, 50, 50)
HA.addAnimation("Ha", Ha)
HA.scale = 0.5
HA.velocityX = -10
AN = createSprite(windowWidth/2+200, windowHeight/2-180, 50, 50)
AN.addAnimation("An", An)
AN.scale = 0.5
AN.velocityX = -10

stone = createSprite(windowWidth/2, 200, 10, 10)
stone.addAnimation("stone", stoneImg)
stone.scale = 0.2
stone2 = createSprite(windowWidth/2, 1000, 10, 10)
stone2.addAnimation("stone", stoneImg)
stone2.scale = 0.2

create = createSprite(windowWidth/4, windowHeight-900, 10, 10)
create.addAnimation("create", createImg)
create.velocityX = 7
create.scale = 0.4

tell = createSprite(windowWidth-200, windowHeight/3, 20, 20)
tell.addAnimation("intro", tellImg)
tell.scale = 0.8

portal = createSprite(windowWidth/4-700, windowHeight/2, 50, 50)
portal.addAnimation("portal", portalImg)
portal.scale = 0.6

story = createSprite(windowWidth+500, windowHeight/2, 50, 50)
story.addAnimation("story",storyImg)
story.scale = 0.5

astro = createSprite(windowWidth/3, windowHeight/25-500, 20, 20)
astro.addAnimation("astronaut", astroImg)
astro.scale = 0.4

button = createSprite(650, 400, 20, 20)
button.addAnimation("play", buttonImg)
button.visible = false

goal = createSprite(windowWidth/2+300,windowHeight/25-300, 20,20)
goal.addAnimation("goal", goalImg)
goal.scale = 0.4

race = createSprite(650, 200, 10, 10)
race.addAnimation("poster", raceImg)
race.visible = false

instruct = createSprite(650, 510, 20, 20)
instruct.addAnimation("instructions", instructImg)
instruct.scale = 0.5
instruct.visible = false

ship = createSprite(50, 300, 10, 10)
ship.addAnimation("spaceship", shipImg)
ship.visible = false
ship.scale = 0.7

/*ship2 = createSprite(-3050, 500, 10, 10)
ship2.addAnimation("spaceship", shipImg)
ship2.visible = false
ship2.scale = 0.7
ship2.velocityX = 0
ship2.setCollider("circle", 0, 0, 50)
ship2.debug = true
*/
instruct1 = createSprite(650, 200, 20, 20)
instruct1.addAnimation("instructions2", instruct1Img)
instruct1.visible = false

back = createSprite(780, 400, 20, 20)
back.addAnimation("go back", backImg)
back.visible = false
back.scale = 0.2

startButton = createSprite(50, 500, 10, 10)
startButton.addAnimation("click", start)

collect = createSprite(650, 500, 10, 10)
collect.addAnimation("h2", collectImg)
collect.visible = false
collect2 = createSprite(650, 500, 10, 10)
collect2.addAnimation("soil", collect2Img)
collect2.visible = false

congrats = createSprite(650, 500, 10, 10)
congrats.addAnimation("congratulations", congratsImg)
congrats.visible = false

text1 = createSprite(900, 800, 10, 10)
text1.addAnimation("text", text1Image)
text1.scale = 2
text1.visible = false

text2 = createSprite(800, 800, 10, 10)
text2.addAnimation("textII", text2Image)
text2.scale = 2
text2.visible = false

text3 = createSprite(500, 800, 10, 10)
text3.addAnimation("textIII", text3Image)
text3.scale = 2
text3.visible = false

text4 = createSprite(400, 840, 10, 10)
text4.addAnimation("textIV", text4Image)
text4.scale = 2
text4.visible = false

text5 = createSprite(300, 840, 10, 10)
text5.addAnimation("textV", text5Image)
text5.scale = 2
text5.visible = false

level = createSprite(650, 400, 10, 10)
level.addAnimation("levelSelect", levelButton)
level.visible = false
level.scale = 0.5
asteroids = new Group()
asteroids2 = new Group()
asteroids3 = new Group()
asteroids4 = new Group()
}

function draw(){
    
    background(space) 
 
   
   VI.display()
   HA.display()
   AN.display()
   stone.display()
   stone2.display()
   create.display()
   tell.display()
   story.display()
   portal.display()
startButton.display()
  


   if(VI.x>windowWidth/2+50){
 
    stone2.velocityY = -20
    stone.velocityY = 20
    stone.lifetime = 50
    stone2.lifetime = 50
    create.lifetime  = 200
   }

if(stone.isTouching(VI)){
    VI.velocityX = 5
    VI.velocityY = -6
    VI.lifetime = 50
    tell.velocityY = -5
    tell.lifetime = 30
}
if(stone.isTouching(HA)){
    HA.velocityX = 3
    HA.velocityY = -10
    HA.lifetime = 50
   
}
if(stone2.isTouching(AN)){
    AN.velocityX = 8
    AN.velocityY = -2

AN.lifetime = 50

 
}

if(create.x>windowWidth+50){
   story.velocityX = -9
   portal.velocityX = 9
   story.lifetime = 200
   portal.lifetime = 100
}
if(portal.isTouching(story)){
    story.destroy()
}
if(portal.x>= 1000){
    cover1.changeAnimation("covering2", cover2Img)
background(space2)
text3.visible = true

goal.display()
astro.velocityY = 18
astro.lifetime = 200
textSize(25)
//text("YOU LAND AT A ROUGH SURFACE AND LOOK AROUND...IS THAT..JUPITER?", 10, 340)
//text("YOU HELP YOUR FRIENDS UP AND SEE YOURSELF IN SPACE SUITS!AND THERE ARE SPACESHIPS TOO!!!", 10, 370)


}



if(create.x>displayWidth+50){
 textSize(25)
  text1.visible = true
text2.visible = true
}
if(astro.y>windowHeight){
    goal.velocityY = 18
     goal.lifetime = 100
    text4.visible = true
 text5.visible = true
 
}

if(mousePressedOver(startButton)){
    themeSound.play()
    startButton.destroy()

    }


if(goal.y>windowHeight + 100){
 
    background(space3)
    cover1.changeAnimation("covering3", cover3Img)
    text1.destroy()
    text2.destroy()
    text3.destroy()
    text4.destroy()
    text5.destroy()
    AsteroidGroup()
    Asteroid2Group()
    Asteroid3Group()
    Asteroid4Group()
    race.visible = true
ship.display()
//ship2.display()
button.visible = true
instruct.visible = true
instruct1.display()
back.display()

//timer.display()

}
    
 


if(mousePressedOver(instruct)){
instruct1.visible = true
back.visible = true
race.visible = false
button.visible = false
instruct.visible = false
}
if(mousePressedOver(back)){
    back.visible = false
    instruct1.visible = false
    instruct.visible = true
    race.visible = true
    button.visible = true

    
}
    
if(mousePressedOver(button)){
 
    themeSound.stop()
//spaceSound1.play()
    race.destroy()
    startButton.destroy()
    ship.visible = true
  //  ship2.visible = true
    button.destroy()
    instruct.destroy()
    instruct1.destroy()
    back.destroy()
cover1.visible = false
   themeSound.play()
   // timer.visible = true
 // timer.velocityY = 0.8
 
    }


   
    if(keyDown("left")){
        ship.x = ship.x - 6
    //  shipSound.play()
    }
        if(keyDown("right")){
            ship.x = ship.x+6
      //      shipSound.play()
        }
      

if(ship.x>1400 ){
ship.x = 50
playerScore = playerScore + 1
}
if(playerScore>=2){
background(space)
collect.visible = true

level.visible = true
}
if(playerScore>=2 && mousePressedOver(level)){
    
    spaceSound2.play()
    level.y = 700
   
}


if(playerScore>=5){
   background(space4)
  //spaceSound1.play()
  level.y = 400
    collect.visible = false
    collect2.visible = true
}
if(playerScore>=5 && mousePressedOver(level)){
    spaceSound1.play()
    spaceSound2.stop()
    level.destroy()
   
}

if(playerScore>=8){
background(space5)

collect2.visible = false
congrats.visible = true
asteroids.destroyEach()
asteroids2.destroyEach()
asteroids3.destroyEach()
asteroids4.destroyEach()
ship.destroy()
//themeSound.play()

}

/*if(ship2.x>1400){
ship2.x = 50
player2Score = player2Score + 1
}
if(player2Score>=2){
    background("red")

}
*/

if(asteroids.isTouching(ship)){
ship.x = 50
}
if(asteroids2.isTouching(ship)){
    ship.x = 50
    }

    if(asteroids3.isTouching(ship)){
        ship.x = 50
        }

        if(asteroids4.isTouching(ship)){
            ship.x = 50
            }

 /*           if(asteroids.isTouching(ship2) || asteroids2.isTouching(ship2) ||asteroids3.isTouching(ship2) || asteroids4.isTouching(ship2)){
ship2.x = ship2.x-8
ship2.velocityX= 0
}
else{
    ship2.velocityX = 3
}
   */
      
astro.display()
textSize(25)
fill("white");

text(playerScore, 1300, 250);
 

drawSprites()

  
    



}

function AsteroidGroup(){
 
    if (frameCount % 120 === 0) {
      var asteroid = createSprite(420,820,40,10);
      asteroid.y = random(270,820);

      asteroid.addImage(stoneImg);
 asteroid.scale = 0.2
     
      asteroid.velocityY = -6
     
  //  car.depth = man.depth;
  //    man.depth = car.depth + 1;
  
     asteroid.setLifetime = 200;
    asteroids.add(asteroid);
      
    }
  }

  function Asteroid2Group(){
 
    if (frameCount % 90 === 0) {
      var asteroid2 = createSprite(650,820,40,10);
      asteroid2.y = random(310,820);

      asteroid2.addImage(stoneImg);
 asteroid2.scale = 0.2
     
      asteroid2.velocityY = -6
     
  //  car.depth = man.depth;
  //    man.depth = car.depth + 1;
  
     asteroid2.setLifetime = 200;
    asteroids2.add(asteroid2);
      
    }
  }

  function Asteroid3Group(){
 
    if (frameCount % 70 === 0) {
      var asteroid3 = createSprite(880,820,40,10);
      asteroid3.y = random(290,820);

      asteroid3.addImage(stoneImg);
 asteroid3.scale = 0.2
     
      asteroid3.velocityY = -6
     
  //  car.depth = man.depth;
  //    man.depth = car.depth + 1;
  
 asteroid3.setLifetime = 200;
    asteroids3.add(asteroid3);
      
    }
  }

  function Asteroid4Group(){
 
    if (frameCount % 70 === 0) {
      var asteroid4 = createSprite(1110,820,40,10);
      asteroid4.y = random(270,820);

      asteroid4.addImage(stoneImg);
 asteroid4.scale = 0.2
     
      asteroid4.velocityY = -6
     
  //  car.depth = man.depth;
  //    man.depth = car.depth + 1;
  
 asteroid4.setLifetime = 200;
    asteroids4.add(asteroid4);
      
    }
  }