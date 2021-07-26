var hero,heroImage;
var bg,bg1;
var aliens,aliens1;
var bullte1,bullet;
var helecopeter,helecopeter1;
var aliensGroup;
var bulletGroup;
var score=0;
var life=3;

function preload(){
  heroImage= loadImage("./images/swayam.png");
  
bg1= loadImage("./images/bg3.jpg");
aliens1= loadImage("./images/aliens.png");
bullte1= loadImage("./images/bullet.png");
helecopeter1= loadImage("./images/helecopeter.png");


}

function setup() {
  createCanvas(800,400);
  

  bg = createSprite(400,200,800,400);
  bg.addImage(bg1);
  bg.scale = 0.5;

 



  hero = createSprite(80,270);
  hero.addImage(heroImage);
  hero.scale = 0.9;

 

  helecopeter = createSprite(600,100);
  helecopeter.addImage(helecopeter1);
  helecopeter.scale = 0.3;

  aliensGroup=new Group()
  bulletGroup=new Group()
}

function draw() {
  background("skyblue");
spawnaliens();

if(keyDown("space")){
spawnbullet();

}

if(aliensGroup.isTouching(bulletGroup)){
bulletGroup.destroyEach();
aliensGroup.destroyEach();
score=score+5;
}


if(aliensGroup.isTouching(hero)){
  life=life-1;
  }

  if(life === 0){
hero.visible=false;
bulletGroup.destroyEach();
aliensGroup.setVelocityXEach(0);
aliensGroup.setLifetimeEach(-1);

  }
    
  drawSprites();
  fill("white");
  textSize(20);
  text("Score: "+ score, 700,50);

}

function spawnaliens() {
  //write code here to spawn the clouds
   if (frameCount % 100 === 0) {
     aliens = createSprite(270,270,40,10);
    aliens.x = Math.round(random(600,800));
    aliens.addImage(aliens1);
    aliens.scale = 0.5;
    aliens.velocityX = -3;
    
     //assign lifetime to the variable
    aliens.lifetime = 200;
    
   
    
    //adding cloud to the group
   aliensGroup.add(aliens);
   }
  }

  function spawnbullet() {
    //write code here to spawn the clouds
     if (frameCount % 10 === 0) {
       bullet = createSprite(200,230,40,10);
      //bullet.x = Math.round(random(60,80));
      bullet.addImage(bullte1);
      bullet.scale = 0.05;
      bullet.velocityX = 10;
      
       //assign lifetime to the variable
     
      
     
      
      //adding cloud to the group
     bulletGroup.add(bullet);
     }
    }

  