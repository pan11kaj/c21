
  var wall,bullet,thikness;
  var speed,weight;
  
  function setup() {
    createCanvas(800,400);
  thickness = random(22,83);
    wall =  createSprite(700, 200,30,100); 
  bullet = createSprite(200,200,70,10);
  speed = random(223,320);
  weight = random(30,52);


  }

  function draw() {
    bullet.velocityX = speed;


    if(colliding(bullet,wall)){
  bullet.x =650;
bullet.velocityX = 0;

  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(damage>10){
    bullet.shapeColor = "red";
  }
  else{
    bullet.shapeColor = "green";
  }

  }

  background("white"); 

    
    drawSprites();
  }

  function colliding(Lbullet,Lwall){
  bulletRightEdge = Lbullet.x+Lbullet.width;
  wallLeftEdge = Lwall.x;

  if(bulletRightEdge>=wallLeftEdge){
  return true;

  }
  else{
    return false;
  }







  }





