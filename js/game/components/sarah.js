function Sarah(x,y){
  this.x = x;
  this.y = y;
  this.w = 40;
  this.h = 40;
  this.dir = 1;
  this.circle1={radius:40, x: x, y: y};
  this.img = loadImage('js/game/img/sarah.png');


  this.show = function(){

    fill(255,0,0);
    this.y += .3;
    this.circle1.y += .3;
    var rand = random(0,100)
    if(rand < .5){
      this.dir = -this.dir;
    }
    if(this.x>=780 || this.x<=20){
      this.dir = -this.dir
    }

    this.x += 1.3*this.dir;
    this.circle1.x +=1.3*this.dir;

    image(this.img,this.circle1.x,this.circle1.y,this.w,this.h);
  }


}
