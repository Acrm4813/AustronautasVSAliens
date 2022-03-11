

function preload(){
  austronaut1Img= loadImage("images/austronaut.png")
}

function setup(){
  var canvas = createCanvas(1900,950);
  form1 = new form();
  form1.display();
  austronaut1 = new austronauts(50,200,50,50);
  austronaut2 = new austronauts(150,200,50,50);


}

function draw(){
background("salmon")
  austronaut1.display();
  austronaut2.display();
}
