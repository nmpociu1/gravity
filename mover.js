var mover1;
var mover2;

function setup() {
createCanvas(640, 360);
mover1 = new Mover(200,180,1);
mover2 = new Mover(400,180,2);
}

function draw() {
background(50);

let gravity = createVector(0, 0.1);
let weight1 = p5.Vector.mult(gravity,mover1.mass);
let weight2 = p5.Vector.mult(gravity,mover2.mass);

mover1.applyForce(weight1);
mover1.bounce();
mover1.update();
mover1.display();

mover2.applyForce(weight2);
mover2.bounce();
mover2.update();
mover2.display();

if(mouseIsPressed){
let wind = createVector(0.1, 0);
mover1.applyForce(wind);
mover2.applyForce(wind);
}
}