var bullets = [];
var enemies = [];
var initialnumberOfEnemies = 2;
var score = 0;

function setup(){
	createCanvas(400,400);
  
  for(var i = 0 ; i<initialnumberOfEnemies; i++){
    var enemy = {
      x:random(0,400),
      y:random(-800 , 0),
      rgb:150,
      enemySpeed:1
    };
    enemies.push(enemy);
  }
}

function draw(){
	background(0);
    fill(255);
    
    rectMode(CENTER);
  //player
    circle(mouseX,height-50,25);
  
  //shooting
  for(var bullet of bullets){
    fill(bullet.rgb);
    circle(bullet.x,bullet.y,10);
    bullet.y -= bullet.bulletSpeed;
  }
  
  //enemies
  for(var enemy of enemies){
    fill(enemy.rgb);
    rect(enemy.x,enemy.y,10);
    enemy.y += enemy.enemySpeed ;
    
    if(enemy.y > height){
      fill(255,0,0);
      stroke(255,0,0);
      strokeWeight(1);
      text('Game Over',width/2,height/2);
      fill(255);
      stroke(0,255,0);
      strokeWeight(1);
      text('Your score is '+ score,width/2 ,height/2 + 10);
      noLoop();
    }
  }
  
  // bullet & enemies collinsion
  for(var enemy of enemies){
    for(var bullet of bullets){
      if(dist(enemy.x,enemy.y,bullet.x,bullet.y)<10){
        enemies.splice(enemies.indexOf(enemy) , 1);
        bullets.splice(bullets.indexOf(bullet) , 1);
        
     // infinite enemies
  for(var i = 0 ; i<initialnumberOfEnemies; i++){
      var againenemy = {
        x:random(0,400),
        y:random(-800 , 0),
        rgb:150,
        enemySpeed:1
      };
      enemies.push(againenemy);
    score++;
    }
        
        
      }
    }
  }
  fill(255);
  stroke(255);
  strokeWeight(1);
  text(score,10,10);
}

function mousePressed(){
  var bullet = {
    x:mouseX,
    y:height-75,
    rgb:255,
    bulletSpeed:3
  };
  bullets.push(bullet);
}
