//Global Variables
var sarahs;
var kyle;
var hearts;
var onscreen = 0;


function setup(){
  noStroke();
  canvas = createCanvas(800,500)
  canvas.class('game')
  canvas.position(100,100)
  kyle = new Kyle(400,473)
  sarahs = []
  var rand = floor(random(100,700))
  sarahs.push(new Sarah(rand,-30))
  hearts = []
}

function draw(){
  background(255,255,255.1);

  //sarahs
  for(var i=0; i<sarahs.length; i++){
    if(sarahs[i].x > 830 || sarahs[i].x <-30 ||sarahs[i].y > 530){
      sarahs.splice(i,1)
    }
    sarahs[i].show();
  }
  if(frameCount%500==0){
    var rand = floor(random(100,700))
    sarahs.push(new Sarah(rand,-30))
  }
  //ground
  fill(200)
  if(isEnemyTouching()){
    fill(255,0,0)
    kyle.health -=20
  }
  rect(0,450,800,50)
  //kyle
  kyle.show();
  textSize(20);
  fill(255,255,255)
  text("Health: "+kyle.health,20,463,150,500)
  text("Score: "+kyle.score,670,463,800,500)
  //hearts
  for(var i=0; i<hearts.length; i++){
    hearts[i].show();
    if(hearts[i].y < -30){
      onscreen -=1;
      hearts.splice(i,1);
      console.log('HSHSH');
    }
  }

  //move
  if(kyle.x >=30){
    if(keyIsDown(LEFT_ARROW)){
      kyle.x -= 10;
    }
  }
  if(kyle.x <=770){
    if(keyIsDown(RIGHT_ARROW)){
      kyle.x += 10;
    }
  }
}
function keyPressed(){
  if(keyCode === 32 && onscreen < 5){
    onscreen +=1
    hearts.push(new Heart(kyle.x-5, kyle.y-19))

  }
}

function isEnemyTouching(){
  for(var x=sarahs.length-1; x>=0; x--){
    if(sarahs[x].y >= 433){
      sarahs.splice(x,1)
      return true

    }
  }
  return false;
}
