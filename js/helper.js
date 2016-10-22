// Helper functions

function AABBIntersect(ax, ay, aw, ah, bx, by, bw, bh) {
  return ax < bx+bw && bx < ax+aw && ay < by+bh && by < ay+ah;
};


// Screen
function Screen(width, height) {
  this.canvas = document.createElement("canvas");
  this.canvas.id = 'gameScreen';
  this.canvas.width = this.width = width;
  this.canvas.height = this.height = height;
  this.ctx = this.canvas.getContext("2d");

  document.body.appendChild(this.canvas);
};

Screen.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.width, this.height);
};

Screen.prototype.drawSprite = function(sp, x, y) {
  this.ctx.drawImage(sp.img, sp.x, sp.y, sp.w, sp.h, x, y, sp.w, sp.h);
};

//Rainbow
function Rainbow(x, y, w, h, color) {
  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;
  this.color = color;
};

//draw rainbowRoad
Screen.prototype.drawRainbow = function(rainbowRoad) {
  this.ctx.fillStyle = rainbowRoad.color;
  this.ctx.fillRect(rainbowRoad.x, rainbowRoad.y, rainbowRoad.width, rainbowRoad.height);
};

// Sprite
function Sprite(img, x, y, w, h) {
  this.img = img;
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
};
// Input Handler
function InputHandler() {
  this.down = {};
  this.pressed = {};

  var _this = this;
  document.addEventListener("keydown", function(evt) {
    _this.down[evt.keyCode] = true;
  });
  document.addEventListener("keyup", function(evt) {
    delete _this.down[evt.keyCode];
    delete _this.pressed[evt.keyCode];
  });
};

InputHandler.prototype.isDown = function(code) {
  return this.down[code];
};

InputHandler.prototype.isPressed = function(code) {
  if (this.pressed[code]){
    return false;
  } else if (this.down[code]) {
    return this.pressed[code] = true;
  }
  return false;

};

//draw Score Board
Screen.prototype.drawScoreBoardTitle = function() {
    var img = new Image();   // Create new img element
    img.src = 'res/highScoresPic.png';
    this.ctx.drawImage(img, 140, 110, 200, 30);
};

//draw Score Text
Screen.prototype.drawText = function(text, x, y) {
  this.ctx.fillStyle = "#FFE742";
  this.ctx.font = "20px Impact";
  //console.log(text);
  this.ctx.fillText(text, x, y);
};

//draw Game Over
Screen.prototype.drawGameOver = function() {
    var img = new Image();   // Create new img element
    img.src = 'res/gameOverPic.png';
    this.ctx.drawImage(img, 140, 300, 200, 30);
};

//draw back button
Screen.prototype.drawBackButton = function() {
    var img = new Image();   // Create new img element
    img.src = 'res/backPic.png';
    img.id = 'backButton';
    this.ctx.drawImage(img, 175, 500, 142, 56);

    var x = document.createElement("AREA");
    x.setAttribute("href", "#");
    x.setAttribute("shape", "circle");
    x.setAttribute("coords", "175,500,20");

    document.getElementById("backButton").appendChild(x);
};

