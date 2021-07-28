class Ball {
    constructor(x,y, radius){    
    var options ={
        isStatic: false,
        restitution: 0.9,
        friction: 1.0,
        density: 1.2
     }
     this.x =x;
     this.y=y;
     this.radius=radius;
     this.body = Matter.Bodies.circle(this.x,this.y,(this.radius), options);
     World.add(engine.world, this.body);
  }
  
  display(){
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    strokeWeight(3)
    
    ellipse(0,0, this.radius,this.radius);
    pop();
  }
  };