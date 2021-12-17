// x and y for my character
var characterX = 100;
var characterY = 100;
// define the key codes for each letter
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// x and y for a shape
var shapeX = 0;
var shapeY = 50;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;

function setup() {
    createCanvas(500, 600);
    // get a random speed when the it first starts
    for (var i = 0; i < 50; i++) {
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeXs[i] = getRandomNumber(500);
        shapeYs[i] = getRandomNumber(600);
        diameters[i] = getRandomNumber(30);
    }

    createCharacter(100, 350);
}

function draw() {
    background(250, 95, 150);
    stroke(0);
    fill(0);

    // call createBorders function
    createBorders(10);

   //call createEscape
  createEscape(20,100,20)
  
  function createEscape(size,test1,test2) 
  { 
  textSize(size)
  text("ESCAPE!",width-test1, height-test2)
  }

    //createCharacter(200,350);
    drawCharacter();
    characterMovement();


    // potential enemy
    fill(100, 145, 14);
    // draw the shape
    for (var i = 0; i < shapeXs.length; i++) {
        square(shapeXs[i], shapeYs[i], diameters[i]);
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);




        // move the shape
        shapeXs[i] += shapeXSpeeds[i];
        shapeYs[i] += shapeYSpeeds[i];
        // check to see if the shape has gone out of bounds
        if (shapeXs[i] > width) {
            shapeXs[i] = 0;
        }
        if (shapeXs[i] < 0) {
            shapeXs[i] = width;
        }
        if (shapeYs[i] > height) {
            shapeYs[i] = 0;
        }
        if (shapeYs[i] < 0) {
            shapeYs[i] = height;
        }
    }
  createWinning();
   function createWinning() {
     if(characterX > width-100 && characterY > width-70)
    {
      fill(0);
      stroke(5);
      textSize(30);
      text("You've Escaped!", width/2-50, height/2-50)
    }
   }
  
    // create the shape based on the mouse click
    fill(120, 130, 140);
    circle(mouseShapeX, mouseShapeY, 25);
}

function characterMovement() {
    // handle the keys
    if (keyIsDown(w)) {
        characterY -= 10;
    }
    if (keyIsDown(s)) {
        characterY += 10;
    }
    if (keyIsDown(a)) {
        characterX -= 10;
        console.log("movement: " + characterX);
    }
    if (keyIsDown(d)) {
        characterX += 10;
    }
}

function createCharacter(x, y) {
    characterX = x;
    characterY = y;
}

function drawCharacter() {
    fill(100, 100, 25);
    circle(characterX, characterY, 25);
}

function createBorders(thicc) { 
  //top
  rect (0,0,width,thicc);
  // left
  rect(0,0,thicc,height);
  // bottom
  rect (0, height-thicc,width-70,thicc);
  //right
  rect(width-thicc,0,thicc,height)
}

function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}