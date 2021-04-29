var bgImg;
var cat,catImg1,catImg2;
var mouse,mouseImg1,mouseImg2;


function preload() {
    //load the images here
    bgImg=loadImage("garden.png");
    catImg1=loadAnimation("images/cat1.png");
    catImg2=loadAnimation("images/cat2.png","images/cat3.png");
 mouseImg1=loadAnimation("images/mouse1.png");
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    catImg3=loadAnimation("images/cat4.png");
mouseImg3=loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(200,200);
    cat.addAnimation(catStanding,catImg1);
    cat.scale=0.2

    mouse=createSprite(870,150);
    mouse.addAnimation(mouseSleeping,mouseImg1);
mouse.scale=0.15;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x-mouse.x<(cat.width-mouse.width)/2){


    {
        cat.velocityX=0;
        cat.addAnimation("catLastImage", catImg4);
        cat.scale=0.5;
        cat.changeAnimation("catLastImage");
        mouse.addAnimation("mouseLastImage", mouseImg1);
        mouse.scale=0.15;
        mouse.x=300;
        mouse.changeAnimation("mouseLastImage");
    
    

    
    }
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseImg2);
mouse.changeAnimation("mouseTeasing");
mouse.delay=25;

}

if(keyCode === LEFT_ARROW){
    cat.addAnimation("catRunning",catImg2);
    cat.changeAnimation("catRunning");
    cat.delay=25;
}



}
