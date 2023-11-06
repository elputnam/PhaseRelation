//Phase Relation: Sedimentary Photos, Techno Vernacular, Corner Milieu, Tropicana Nights, Flickering Icons, Patria O Muerte

//p5.scenemanager variable
let mgr;

//Sedimentary Photos
let EL_SP;
let dad_SP;
let sign_SP;
let base_SP;
let elderly_SP;
let pregnant_SP;

//Techno Vernacular
let base_TV;
let source_TV;
let repair1_TV;
let repair2_TV;
let repair3_TV;
let postcard_TV;
let EL_TV;
let dad_TV;

//Corner Milieu
let base_CM;
let Che_CM;
let cart_CM;
let callerBig_CM;
let EL_CM;
let dad_CM;
let callers_CM;
let callerSmall_CM;
let cleaner_CM;

//Tropicana Nights
let base_TN;
let skirt_TN;
let solo_TN;
let light_TN;
let EL_TN;

//Flickering Icons
let lanework = [];
let EL_FI;
let postcard_FI;
let hand_FI;
let tropicana_FI;
let dadLook_FI;
let dadShoot_FI;
let muralEL_FI;
let muralDad_FI;
let roof_FI;
let base_FI;

//Patria O Muerte
let squares_PM = [];
let base_PM;
let fisher_PM;
let cafe_PM;
let folx_PM;
let postcard_PM;
let silhouette_PM;
let EL1_PM;
let dad1_PM;
let EL2_PM;
let dad2_PM;


function preload(){
  //Sedimentary Photos
  EL_SP = loadImage('assets/ELDad_Fotos_EL.png');
  dad_SP = loadImage('assets/ELDad_Fotos_Dad.png');
  base_SP = loadImage('assets/ELDad_Fotos_base.png');
  sign_SP = loadImage('assets/ELDad_Fotos_sign.png');
  elderly_SP = loadImage('assets/ELDad_Fotos_Elderly.png');
  pregnant_SP = loadImage('assets/ELDad_Fotos_pregnant.png');

  //TechnoVernacular
  base_TV = loadImage('assets/ELDad_TechnoVernacular_base.png');
  source_TV = loadImage('assets/ELDad_TechnoVernacular_repair.png');
  repair1_TV = loadImage('assets/ELDad_TechnoVernacular_repair1.png');
  repair2_TV = loadImage('assets/ELDad_TechnoVernacular_repair2.png');
  repair3_TV = loadImage('assets/ELDad_TechnoVernacular_repair3.png');
  EL_TV = loadImage('assets/ELDad_TechnoVernacular_EL.png');
  dad_TV = loadImage('assets/ELDad_TechnoVernacular_dad.png');
  postcard_TV = loadImage('assets/ELDad_TechnoVernacular_postcard.png');

  //Corner Milieu
  base_CM = loadImage('assets/ELDad_StreetCorner_base.png');
  Che_CM = loadImage('assets/ELDad_StreetCorner_Che.png');
  cart_CM = loadImage('assets/ELDad_StreetCorner_cart.png');
  callerBig_CM = loadImage('assets/ELDad_StreetCorner_callerBig.png');
  EL_CM = loadImage('assets/ELDad_StreetCorner_EL.png');
  dad_CM = loadImage('assets/ELDad_StreetCorner_dad.png');
  callers_CM = loadImage('assets/ELDad_StreetCorner_callers.png');
  callerSmall_CM = loadImage('assets/ELDad_StreetCorner_callerSmall.png');
  cleaner_CM = loadImage('assets/ELDad_StreetCorner_cleaner.png');

  //Tropicana Nights
  base_TN = loadImage('assets/TropicanaNights_base.png');
  light_TN = loadImage("assets/TropicanaNights_light.png"); 
  solo_TN = loadImage('assets/TropicanaNights_solo.png');
  EL_TN = loadImage('assets/TropicanaNights_EL.png');

  //Flickering Icons
  EL_FI = loadImage('assets/ELDad_Icons_EL.png');
  postcard_FI = loadImage('assets/ELDad_Icons_postcard.png');
  hand_FI = loadImage('assets/ELDad_Icons_hand.png');
  tropicana_FI = loadImage('assets/ELDad_Icons_handPostcard.png');
  dadLook_FI = loadImage('assets/ELDad_Icons_dadLook.png');
  dadShoot_FI = loadImage('assets/ELDad_Icons_dadShoot.png');
  muralEL_FI = loadImage('assets/ELDad_Icons_muralEL.png');
  muralDad_FI = loadImage('assets/ELDad_Icons_muralDad.png');
  roof_FI = loadImage('assets/ELDad_Icons_roofDad.png');
  base_FI = loadImage('assets/ELDad_Icons_base.png');

  //PatriaOMuerte
  base_PM = loadImage('assets/ELDad_PatriaOMuerte_base.png');
  cafe_PM = loadImage("assets/ELDad_PatriaOMuerte_cafe.png");
  fisher_PM = loadImage("assets/ELDad_PatriaOMuerte_fisher.png");
  folx_PM = loadImage("assets/ELDad_PatriaOMuerte_folx.png")
  EL1_PM = loadImage('assets/ELDad_PatriaOMuerte_EL.png');
  dad1_PM = loadImage('assets/ELDad_PatriaOMuerte_dad.png');
  EL2_PM = loadImage('assets/ELDad_PatriaOMuerte_EL2.png');
  dad2_PM = loadImage('assets/ELDad_PatriaOMuerte_dad2.png');
  postcard_PM = loadImage('assets/ELDad_PatriaOMuerte_postcard.png');
  silhouette_PM = loadImage('assets/ELDad_PatriaOMuerte_silhouette.png')

  for (let i = 0; i < 16; i++){
    squares_PM[i] = loadImage("assets/grid_" + i + ".png");
  }  

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  mgr = new SceneManager();

  //Preload scenes
  mgr.addScene (SedimentaryPhotos);
  mgr.addScene (TechnoVernacular);
  mgr.addScene (CornerMilieu);
  mgr.addScene (TropicanaNights);
  mgr.addScene (FlickeringIcons);
  mgr.addScene (PatriaOMuerte);
  mgr.showNextScene();
}

function draw() {
  console.log(frameCount);
  mgr.draw();
}

//resets frameCount
function reset(){
  frameCount = 0;
  }

//change between scenes with keyboard
function keyPressed(){
  switch(key)
  {
      case '1':
        reset();
        mgr.showScene(SedimentaryPhotos);
        break;
      case '2':
        reset();
        mgr.showScene(TechnoVernacular);
        break;
      case '3':
        reset();
        mgr.showScene(CornerMilieu);
        break;
      case '4':
        reset();
        mgr.showScene(TropicanaNights);
        break;
      case '5':
        reset();
        mgr.showScene(FlickeringIcons);
        break;
      case '6':
        reset();
        mgr.showScene(PatriaOMuerte);
        break;
  }
}


function mousePressed(){

  let fs = fullscreen();
  fullscreen(!fs);
}



//=============Sedimentary Photos=========

function SedimentaryPhotos(){
  let colour = 180;

  this.setup = function(){
    createCanvas(base_SP.width, base_SP.height);
    colorMode(HSB, 360, 100, 100, 100);
    frameRate(7);
  }

  this.draw = function(){
    if (frameCount == 1){
      createCanvas(base_SP.width/2, base_SP.height/2);
      frameRate(7);
      rectMode(CORNER);
    }
  
    background(200);
    push();
    image(base_SP, 0, 0, width, height);
    pop();

    //sign
    push();
    tint(255, random(50, 70));
    image(sign_SP, 0, 0, sign_SP.width/2, sign_SP.height/2);
    pop();
    blend(sign_SP, 0, 0, sign_SP.width, sign_SP.height, 0, 0, sign_SP.width/2, sign_SP.height/2, LIGHTEST);

    //photo layers
    blend(pregnant_SP, 0, 0, pregnant_SP.width, pregnant_SP.height, 0, 0, pregnant_SP.width/2, pregnant_SP.height/2, DARKEST);
    blend(elderly_SP, 0, 0, elderly_SP.width, elderly_SP.height, 0, 0, elderly_SP.width/2, elderly_SP.height/2, DARKEST);

    //blocks
    for (let i = 0; i < 10; i++){
      noStroke();
      fill(colour, random(100), random(100), random(100));
      rect(random(width), 0, random(100), height);
    }

    //dad
    push();
    //tint(255, random(50, 100));
    dad_SP.filter(GRAY);
    image(dad_SP, 0, 0, width, height);
    pop();

    //EL
    push();
    EL_SP.filter(GRAY);
    tint(colour, 30, 100);
    image(EL_SP, 0, 0, width, height);
    pop();

  if (frameCount%int(random(20))==0){
    colour = random(360);
    dad_SP.filter(INVERT);
    base_SP.filter(INVERT);
  }

  if (frameCount == 1500){
    reset();
    mgr.showScene(TechnoVernacular);
  }
  }
}

//=========Techno Vernacular=======

function TechnoVernacular(){
  let colour = 300;
  let alp1 = 0;
  let alp2 = 100;

  // Tiles configuration
  let tiles = [];
  let cols = 5;
  let rows = 5;
  let w, h;
  let x1  = 0;
  let y1 = 0;

  // Order of tiles
  let board = [];

  this.setup = function(){
    createCanvas(base_TV.width/2, base_TV.height/2);
    frameRate(4);
  // pixel dimensions of each tiles
  w = width / cols;
  h = height / rows;
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * w;
      let y = j * h;
      let img = createImage(w, h);
      img.copy(source_TV, x, y, w, h, 0, 0, w, h);
      let index = i + j * cols;
      board.push(index);
      let tile = new Tile(index, img);
      tiles.push(tile);
      }
    }
  }

  this.draw = function(){
    if (frameCount == 1){
      createCanvas(base_TV.width/2, base_TV.height/2);
      frameRate(4);
      rectMode(CORNER);
    }

    background(0);
  
    //base
    push();
    //tint(255, random(70, 100));
    image(base_TV, 0, 0, width, height);
    pop();


    for (let i = 0; i < (cols * rows); i++){
      strokeWeight(random(1,5));
      stroke(0);
      fill(colour-90, 100, 100);
      rect(random(width), random(height), w, h);
    }

    blend(source_TV, 0, 0, source_TV.width, source_TV.height, 0, 0, width, height, DARKEST)

    //repair shuffle
    push();
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let index = int(random(25));
        let x = i * w;
        let y = j * h;
        let tileIndex = board[index];
        if (tileIndex > -1) {
          tint(colour-90, random(100), 100, alp1);
          let img = tiles[tileIndex].img;
          image(img, x, y, w, h);
        }
      }
    }
    pop();
    
    //grid
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let x = i * w;
        let y = j * h;
        stroke(0, alp1);
        strokeWeight(random(1,3));
        noFill();
        rect(x, y, w, h);
        }
      }

    //EL
    push();
    tint(colour, random(50), alp2);
    EL_TV.filter(GRAY);
    scale(random(0.9, 1.05));
    image(EL_TV, random(-30,70), 0, width, height);
    pop();

    //dad
    push();
    tint(colour-180, random(100), alp2);
    dad_TV.filter(GRAY);
    image(dad_TV, random(-200, -100), random(-10), width, height);
    pop();

    //postcard
    push();
    tint(255, alp1);
    // postcard.filter(INVERT);
    image(postcard_TV, random(100), 0, width, height);
    pop();

    if (frameCount%int(random(30))==0){
      colour = random(180, 360);
      dad_TV.filter(INVERT);
      EL_TV.filter(INVERT);
      if (alp1 <= 0){
        alp1 = 100;
        alp2 = 50;
    } else {
      alp1 = 0;
      alp2 = 100;
      }
    }

    if (frameCount == 1500){
      reset();
      mgr.showScene(CornerMilieu);
    }

  }

  class Tile {
    constructor(i, img) {
      this.index = i;
      this.img = img;    
    }
  }
}

//==========Corner Milieu==========

function CornerMilieu(){
  let alp1 = 0;
  let alp2 = 100;
  let colour = 360;

  this.setup = function(){
    createCanvas(base_CM.width/2, base_CM.height/2);
    frameRate(5);
  }

  this.draw = function(){
    if (frameCount == 1){
      createCanvas(base_CM.width/2, base_CM.height/2);
      frameRate(5);
      rectMode(CORNER);
    }
    background(0);
    //base
    push();
    tint(255, random(70, 100));
    image(base_CM, 0, 0, width, height);
    pop();

    //cart
    blend(cart_CM, 0, 0, cart_CM.width, cart_CM.height, 0, 0, width, height, LIGHTEST);

    //Che
    blend(Che_CM, 0, 0, Che_CM.width, Che_CM.height, 0, 0, width, height, LIGHTEST);

    //caller  
    blend(callerBig_CM, 0, 0, callerBig_CM.width, callerBig_CM.height, 0, 0, width, height, DARKEST);

    //bars
    noStroke();
    fill(colour, random(100), random(100), alp1);
    rect(0, 0, width, height);
    for (let i = 0; i < 50; i++){
      fill(colour-180, random(100), random(100), random(alp1));
      fill(random(255), alp1);
      rect(0, random(height), width, random(20));
    }

    //EL
    push();
    tint(colour, random(50), alp2);
    EL_CM.filter(GRAY);
    image(EL_CM, 0, 0, width, height);
    pop();
  
    //dad
    push();
    tint(colour-180, random(100), alp2);
    dad_CM.filter(GRAY);
    image(dad_CM, 0, 0, width, height);
    pop();

    //callers
    push();
    tint(colour-180, 100, 100, alp1);
  
    if (frameCount%int(random(5))==0){
      callers_CM.filter(INVERT);
      }
    image(callers_CM, 0, 0, width, height);
    pop();

    //Small caller
    push();
    tint(colour-180, random(50), alp1);
    callerSmall_CM.filter(INVERT);
    image(callerSmall_CM, 0 , 0, width, height);
    pop();

    //Cleaner
    push();
    tint(colour-180, random(50), alp1);
    if (frameCount%int(random(5))==0){
      cleaner_CM.filter(INVERT);
    }
    image(cleaner_CM, random(-50, 50), 0, width, height);
    pop();

    if (frameCount%int(random(20))==0){
      colour = random(180, 360);
      if (alp1 <= 0){
        alp1 = 100;
        alp2 = 0;
    } else {
      alp1 = 0;
      alp2 = 100;
      }
    }

    if (frameCount == 1500){
      reset();
      mgr.showScene(TropicanaNights);
    }

  }

}

//=======Tropicana Nights==========

function TropicanaNights(){
  let alp1 = 100;
  let alp2 = 0;
  let alp3 = 0;
  let alp4 = 0;
  let colour = 0;

  // shapes
  let angle = 0;
  let radius = 0;
  let spot = 0;
  let radInc;
  let angInc;
  let tone = 100;
  let x;
  let y;
  let glitches = [];

  // Tiles configuration
  let tiles = [];
  let cols = 5;
  let rows = 5;
  let w, h;
  let x1  = 0;
  let y1 = 0;

  // Order of tiles
  let board = [];

  this.setup = function(){
    createCanvas(base_TN.width/2, base_TN.height/2);
    colorMode(HSB, 360, 100, 100, 100);
    angleMode(DEGREES);
    background(0);
    frameRate(6);
    rectMode(CENTER);
    for (let i = 0; i < 50; i++){
      glitches[i] = new Glitch(random(width), random(height), random(width), random(1,10));
      }
    // pixel dimensions of each tiles
    w = width / cols;
    h = height / rows;
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let x = i * w;
        let y = j * h;
        let img = createImage(w, h);
        img.copy(base_TN, x, y, w, h, 0, 0, w, h);
        let index = i + j * cols;
        board.push(index);
        let tile = new Tile(index, img);
        tiles.push(tile);
       }
     }
    }

  this.draw = function(){
    if (frameCount == 1){
      createCanvas(base_TN.width/2, base_TN.height/2);
      frameRate(5);
      rectMode(CENTER);
    }

    background(0);
    
    //light
    push();
    tint(255, alp4);
    image(light_TN, random(width*.25, width/2), 0, width, height);
    pop();

    //base photo
    push();
    tint(255, alp1);
    image(base_TN, 0, 0, width, height);
    pop();

    if (alp1 <= 15){
      alp4 = 100;
    } else {
      alp4 = 0;
    }
  

    for(let i = 0; i < glitches.length; i++){
      glitches[i].show();
      if (frameCount%8==0){
        glitches[i].change();
      }
    }

    if (frameCount%int(random(20))==0){
      colour = random(360);
      solo_TN.filter(INVERT);
      alp1 = random(100);
      alp2 = random(50);
      if (alp3 <= 0){
        alp3 = 100;
        alp2 = 100
        } else {
          alp3 = 0;
          alp2 = 0;
        }
      }

    radInc = random(2);
    angInc = random(5);

    //Triangle
    push();
    translate(width/2, height/2);
    noFill();
    strokeWeight(random(10,20));
    stroke(180, random(100), tone);
    triangle(random(-100, 100), -300, 300, random(100, 400), -300, random(100, 400));
    pop();

    //solo
    push();
    tint(255, alp1);
    image(solo_TN, random(-100), 0, width, height);
    pop();

    //spiral 1
    push();
    translate(width/2, height/2-100);
    this.spiral();
    pop();

    //spiral 2
    push();
    translate(width*.3, height/2+200);
    this.spiral();
    pop();

    //spiral 3
    push();
    translate(width*.7, height/2+200);
    this.spiral();
    pop();

    //dance shuffle
    push();
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let index = int(random(16));
        let x = i * w;
        let y = j * h;
        let tileIndex = board[index];
        if (tileIndex > -1) {
          tint(255, alp3);
          let img = tiles[tileIndex].img;
          image(img, x, y, w, h);
        }
      }
    }
    pop();


    blend(solo_TN, 0, 0, solo_TN.width, solo_TN.height, 0, 0, width, height, EXCLUSION);

    //EL
    push();
    tint(colour, random(20), 100, alp2);
    EL_TN.filter(GRAY);
    image(EL_TN, random(-50, 50), 0, width, height);
    pop();
  
    if (frameCount == 1500){
      reset();
      mgr.showScene(FlickeringIcons);
    }
  
  }

  this.spiral = function(){
    for (let i = 0; i < 200; i++){
    //   radInc = random(2);
    // angInc = random(5);
      push();
      rotate(angle);
      angle += angInc;
      radius += radInc;
      stroke(random(300, 360), 100, tone);
      strokeWeight(random(1,10));
      
      // ellipse(radius,spot,random(5,10), random(5,10));
      point(radius,spot);
      pop();
      if (radius>=10){
        radius = random(-width*.2, width*.2);
        spot = random(-width*.2, width*.2)
        tone = random(100)
      }
    }
  }

  class Glitch{
    constructor(x, y, wid, high){
      this.x = x;
      this.y = y;
      this.wid = wid;
      this.high = high;
    }
    change(){
      this.x = random(width);
      this.y = random(height);
      this.wid = random(width);
      this.high = random(1, 10);
    }
    show(){
      //noStroke();
      //noFill();
      stroke(70, 100, 100);
      fill(70, 100, 100, random(100));
      rect(this.x, this.y, this.wid, this.high);
    }
  }
  
  class Tile {
    constructor(i, img) {
      this.index = i;
      this.img = img;    
    }
  }


  }



//=======Flickering Icons==========

function FlickeringIcons(){
  let flicker = 100;
  let colour = 360;
  let x = 0;
  let y = 0;
  let alp1 = 0;
  let alp2 = 100;
  let alp3 = 100;
  let shade = 0;
  let incr = 1;

  this.setup = function(){
    createCanvas(base_FI.width/2, base_FI.height/2);
    frameRate(8);
    rectMode(CENTER);
    for (let i=0; i < 500; i++){
      lanework[i] = new Lane(random(width), random(height), random(10,50), random(-20, 20), random(-20, 20), 1);
    }
  }

  this.draw = function(){
    if (frameCount == 1){
      createCanvas(base_FI.width/2, base_FI.height/2);
      frameRate(7);
      rectMode(CENTER);
    }

    background(0);
  
    //base
    push();
    tint(255, random(50, 100));
    image(base_FI, 0, 0, width, height);
    pop();

    //roof
    blend(roof_FI, 0, 0, roof_FI.width, roof_FI.height, 0, 0, width, height, DARKEST);

    //mural dad
    blend(muralDad_FI, 0, 0, muralDad_FI.width, muralDad_FI.height, 0, 0, width, height, LIGHTEST);
  
    //mural EL
    blend(muralEL_FI, 0, 0, muralEL_FI.width, muralEL_FI.height, 0, 0, width, height, OVERLAY);



    //dad shoot
    push();
    tint(colour-180, flicker, 100, alp2);
    dadShoot_FI.filter(GRAY);
    image(dadShoot_FI, 0, 0, width, height);
    pop();

    //universal flicker
    noStroke();
    fill(colour-180, 100, 100, random(alp1));
    rect(width/2, height/2, width, height);
    
      //lanework
    for (let i = 0; i < lanework.length; i++){
      lanework[i].edge();
      lanework[i].move();
      lanework[i].show();
    }

    //dad Look
    
    push();
    dadLook_FI.filter(GRAY);
    image(dadLook_FI, 0, 0, width, height);
    pop();

    //hand and postcard
    blend(tropicana_FI, 0, 0, tropicana_FI.width, tropicana_FI.height, 0, 0, width, height, LIGHTEST);

    //hand
    hand_FI.filter(GRAY);
    image(hand_FI, 0, 0, width, height);

    //postcard
    push();
    tint(255, alp3);
    image(postcard_FI, 0, 0, width, height);
    pop();

    //EL
    push();
    tint(colour, flicker, 100);
    EL_FI.filter(GRAY);
    image(EL_FI, 0, 0, width, height);
    pop();
    
    if (frameCount%10==0){
      colour = random(180, 360);
    }

    if (frameCount%2==0){
      flicker = random(30, 100);
    };

    if (frameCount%int(random(20))==0){
      dadLook_FI.filter(INVERT);
      shade = random(255);
      if (alp1 <= 0){
      alp1 = 100;
      alp2 = 0;
      //alp3 = random(100);
      alp3 = 0
      } else {
        alp1 = 0;
        alp2 = 100;
        alp3 = 100;
      }
    }
    
    if (frameCount == 1500){
      reset();
      mgr.showScene(PatriaOMuerte);
    }

  }

  class Lane{
    constructor(x, y, r, inc1, inc2, weight){
      this.x = x;
      this.y = y;
      this.r = r;
      this.inc1 = inc1;
      this.inc2 = inc2;
      this.weight = weight;
    }
  
    move(){
      this.x += this.inc1;
      this.y += this.inc2;
      this.weight += incr;
    }
  
    edge(){
      if (this.x <= 0 || this.x >= width){
        this.inc1 *= -1;
      }
      if (this.y <= 0 || this.y >= height){
        this.inc2 *= -1;
      }
  
      if (this.weight >= this.r/2 || this.weight <= 0){
        incr *= -1;
      };
    }
    show(){
      strokeWeight(random(0.5,4));
      noFill();
      stroke(shade, alp1);
      rect(this.x, this.y, this.r);
    }
  }

}

//=======Patria O Muerte============

function PatriaOMuerte(){
  let x = 0;
  let y = 0;
  let alp1 = 0;
  let alp2 = 100;

  this.setup = function(){
    createCanvas(base_PM.width/2, base_PM.height/2);
    frameRate(6);

  }

  this.draw = function(){
    if (frameCount == 1){
      createCanvas(base_PM.width/2, base_PM.height/2);
      frameRate(6);
      rectMode(CORNER);
    }

    background(0);
  
    //base
    push();
    tint(255, random(70, 100));
    image(base_PM, 0, 0, width, height);
    pop();

    // fisher
    blend(fisher_PM, 0, 0, fisher_PM.width, fisher_PM.height, 0, 0, width, height, DARKEST);

    //cafe
    blend(cafe_PM, 0, 0, cafe_PM.width, cafe_PM.height, 0, 0, width, height, LIGHTEST);

    // folx
    blend(folx_PM, 0, 0, folx_PM.width, folx_PM.height, 0, 0, width, height, DARKEST);
    
    //Image Grid shuffle
    push();
    tint(random(360), 100, 100, alp1);
    for (j = 0; j < squares_PM.length; j++){
      image(squares_PM[int(random(16))], x, y, width/4, height/4);
      //move down
      x += width/4;
      if (x >= width){
        x = 0;
        y += height/4;
      }
      if (y >= height){
        y = 0;
      }
    }
    pop();

    //dad
    push();
    tint(random(180, 250), random(50), alp2);
    dad1_PM.filter(GRAY);
    image(dad1_PM, 0, 0, width, height);
    pop();

    //EL
    push();
    tint(random(0,70), random(50), alp2);
    EL2_PM.filter(GRAY);
    image(EL2_PM, 0, 0, width, height);
    pop();


    //postcard
    push();
    tint(255, alp2);
    postcard_PM.filter(GRAY);
    image(postcard_PM, 0, 0, width, height);
    pop();

    push();
    tint(255, alp1);
    silhouette_PM.filter(INVERT);
    image(silhouette_PM, 0, 0, width, height);
    pop();

    if (frameCount%int(random(20))==0){
      if (alp1 <= 0){
        alp1 = 100;
        alp2 = 0;
    } else {
      alp1 = 0;
      alp2 = 100;
      }
    }

    if (frameCount == 1500){
      reset();
      mgr.showScene(SedimentaryPhotos);
    }

  }
}