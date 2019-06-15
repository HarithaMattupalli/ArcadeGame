// Enemies the player must avoid
var Enemy = function(x,y,speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images

    this.sprite = 'img/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += (this.speed * dt);
    //Here we are setting the speed of enemies using random() function i.e. the speed
    //of the enemy changes randomly whenver we reload the page.
    this.speed = 3*Math.floor(Math.random()*100);
    //As the enemy should start again after it moves once through the canvas I have set
    //its initial position to 0 so that whenever enemy reaches end of canvas it again starts.

    if(this.x>505){
        this.x=0;
    }
    //When player and enemy collide with each other the player comes to initial position
    //and a popup is shown that the user lost the game.
    if (player.x < this.x + 80  && player.x + 70  > this.x &&
	     player.y < this.y + 80 && player.y + 80 > this.y) {
         player.x = 200;
         player.y = 380;
         swal({
           title:"Sorry....you lost the game.Wanna try again!!!",
           type:"error",
           confirmButtonColor:"red",
           confirmButtonText:"Try Again"
         })
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite = "img/enemy-bug.png"), this.x, this.y);
};

// Place all enemy objects in an array called allEnemies
var allEnemies = [];
//Setting the enemies initial positions.
var enemy_pos = [70,140,210];
//For each position in the enemy_pos array I have created an enemy object and pushed it into
//allEnemies array.
for(var t=0 ; t<enemy_pos.length ; t++){
  var enemy = new Enemy(Math.random()*200,enemy_pos[t],200)
  allEnemies.push(enemy)
}

//The Player function,which initiates player by setting initial location.
var Player = function(x,y){
  this.x = x;
  this.y = y;
}
// I placed the Player object in a variable called player and set the player initial position.
var player = new Player(200,380);

Player.prototype.update = function(dt) {}

//render method for player to load the image by setting this.sprite to the appropriate image in
//the image folder.
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite = "img/char-pink-girl.png"), this.x, this.y);
}

//The handleInput method, which should receive user input, allowedKeys (the key which was pressed)
//and move the player according to that input.
player.handleInput = function(move){
  switch(move){
    case "left":
      if(this.x>40){
        this.x += -100;
      }
      break;
    case "right":
      if(this.x<400){
        this.x += 100;
      }
      break;
    case "up":
      if(this.y>40){
        this.y += -80;
      }
      break;
    case "down":
      if(this.y<320){
        this.y += 80;
      }
      break;
  }
  //When player reaches water a congrats popup is shown that the user have
  //completed the game and the palyer is set to his initial position.
  if(player.y<0){
    swal(
      {
        title : "Congratulations...",
        text : "You won the game!!!",
        type :"success",
        confirmButtonColor:"green",
        confirmButtonText : "Play Again"
      },function(){
      location.reload();
    })
  }
}
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
