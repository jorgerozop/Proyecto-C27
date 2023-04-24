// class Box 
// Class
class Box {
  constructor(x, y, w, h) 
  {
    let options = {
      friction: 0.3,
      restitution: 0.6
    };
    
    this.body = Bodies.rectangle(x, y, w  , h, options);
    this.w = w;
    this.h = h;
  
    var al = Math.round(random(1,4));
    if(al === 1){
      this.image = loadImage("./c1.png");
    }else if(al === 2){
      this.image = loadImage("./c2.png");
    }else if(al === 3){
      this.image = loadImage("./c3.png");
    }else if(al === 4){
      this.image = loadImage("./c4.png")
    }
    

    World.add(world, this.body);

  
  }

  show() {
    let pos = this.body.position;
    let angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(1);
    stroke(255);
    fill(127);
    rect(0, 0, this.w, this.h);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}