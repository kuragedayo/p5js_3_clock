function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(200);
  
  translate(width / 2, height / 2);
  
  stroke('#2C687B');
  strokeWeight(4);
  fill('#FFF6F6');
  ellipse(0, 0, 320, 320);

  for (let angle = 0; angle < 360; angle += 6) {
    
    push(); 
    rotate(angle); 
    stroke('#8CC7C4');
    strokeWeight(4);
    line(150, 0, 145, 0); 
    pop(); 
  }
  
  //use computer time    
  let s = second();
  let m = minute();
  let h = hour();

  //minus 90 to make every hand start at 12 o'clock direction
  let sAngle = map(s, 0, 60, 0, 360) - 90;
  let mAngle = map(m, 0, 60, 0, 360) - 90;
  let hAngle = map(h, 0, 12, 0, 360) - 90;

  push();
  rotate(sAngle);
  stroke('#DB1A1A');
  strokeWeight(2);
  line(0, 0, 120, 0);
  pop();

  push();
  rotate(mAngle);
  stroke('#2C687B');
  strokeWeight(4);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(hAngle);
  stroke('#2C687B');
  strokeWeight(8);
  line(0, 0, 70, 0);
  pop();

}