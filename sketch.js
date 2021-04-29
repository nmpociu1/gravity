class Mover {
constructor(x,y,m) {
this.loc = createVector(x,y);
this.vel = createVector(0, 0);
this.acc = createVector(0, 0);
this.mass = m;
}

applyForce(force){
let f = p5.Vector.div(force,this.mass);
this.acc.add(f);
}

update() {
this.loc.add(this.vel);
this.vel.add(this.acc);
this.acc.set(0,0);
}

display() {
stroke(0);
fill(175);
ellipse(this.loc.x, this.loc.y, 16, 16);
}

bounce(){
if(this.loc.y >= height){
this.loc.y = height;
this.vel.y *= -1;
}
if(this.loc.x >= width){
this.loc.x = width;
this.vel.x *= -1;
}
if(this.loc.x <= 0){
this.loc.x = 0;
this.vel.x *= -1;
}
}
}