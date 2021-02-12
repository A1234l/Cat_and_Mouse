var tom, tomImg, tomImg2, tomImg3;
var jerry, jerryImg, jerryImg2, jerryImg3;
var tomC, jerryC;
var garden, gardenImg;

function preload() {
    tomImg = loadAnimation('images/cat1.png');
    tomImg2 = loadAnimation('images/cat2.png','images/cat3.png');
    tomImg3 = loadAnimation('images/cat4.png');
    jerryImg = loadAnimation('images/mouse1.png');
    jerryImg2 = loadAnimation('images/mouse2.png','images/mouse3.png');
    jerryImg3 = loadAnimation('images/mouse4.png');
    gardenImg = loadAnimation('images/garden.png');
}

function setup(){
    createCanvas(1000,800);

    garden = createSprite(500,400,10,10);
    garden.addAnimation('backgroundImg',gardenImg);
    garden.scale = 1.2;

    //create tom and jerry sprites here
    tom = createSprite(850,670,10,10);
    tom.addAnimation('catSitting',tomImg);
    tom.addAnimation('catRunning',tomImg2);
    tom.addAnimation('catCatching',tomImg3);
    tom.scale = 0.2;

    jerry = createSprite(80,700,10,10);
    jerry.addAnimation('mouseStanding', jerryImg);
    jerry.addAnimation('mouseJumping',jerryImg2);
    jerry.addAnimation('mouseCaught', jerryImg3);
    jerry.scale = 0.1;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(abs(tom.x-jerry.x)<=(tom.width-jerry.width)/2 && 
    abs(tom.y-jerry.y) <= tom.height/2 - jerry.height/2){
        tom.changeAnimation('catCatching',tomImg3);
        jerry.changeAnimation('mouseCaught',jerryImg3);
        
        tom.velocityX = 0;
        jerry.velocityX = 0;
    }
    drawSprites();
    keyPressed();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyDown('left')){
        tom.velocityX = -5;
        tom.changeAnimation('catRunning',tomImg2);
        jerry.changeAnimation('mouseJumping',jerryImg2);
    }

}
