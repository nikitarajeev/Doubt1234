const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;


function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground(400,780,800,30)

  division1 = new Divisions(5,665,5,200)
  division2 = new Divisions(73,665,5,200)
  division3 = new Divisions(141,665,5,200)
  division4 = new Divisions(209,665,5,200)
  division5 = new Divisions(277,665,5,200)
  division6 = new Divisions(345,665,5,200)
  division7 = new Divisions(413,665,5,200)
  division8 = new Divisions(478,665,5,200)

  // column 1 from top  
  c1t1 = new Plinko (7, 40,10);
  c1t2 = new Plinko (7, 80,10);
  c1t3 = new Plinko (7, 120,10);
  c1t4 = new Plinko (7, 160,10);
  c1t5 = new Plinko (7, 200,10); 
  c1t6 = new Plinko (7,240,10);
  c1t7 = new Plinko (7, 280,10);
  c1t8 = new Plinko (7, 320,10);
  c1t9 = new Plinko (7, 360,10); 
  c1t10 = new Plinko(7,400,10);
  c1t11= new Plinko (7, 440,10);


   // column 2 from top  
   c2t1 = new Plinko (56, 40,10);
   c2t2 = new Plinko (56, 80,10);
   c2t3 = new Plinko (56, 120,10);
   c2t4 = new Plinko (56, 160,10);
   c2t5 = new Plinko (56, 200,10); 
   c2t6 = new Plinko (56,240,10);
   c2t7 = new Plinko (56, 280,10);
   c2t8 = new Plinko (56, 320,10);
   c2t9 = new Plinko (56, 360,10); 
   c2t10 = new Plinko(56,400,10);
   c2t11= new Plinko (56, 440,10);

    // column 3 from top  
    c3t1 = new Plinko (112, 40,10);
    c3t2 = new Plinko (112, 80,10);
    c3t3 = new Plinko (112, 120,10);
    c3t4 = new Plinko (112, 160,10);
    c3t5 = new Plinko (112, 200,10); 
    c3t6 = new Plinko (112,240,10);
    c3t7 = new Plinko (112, 280,10);
    c3t8 = new Plinko (112, 320,10);
    c3t9 = new Plinko (112, 360,10); 
    c3t10 = new Plinko(112,400,10);
    c3t11= new Plinko (112, 440,10);


    // column 4 from top  
    c4t1 = new Plinko (174, 40,10);
    c4t2 = new Plinko (174, 80,10);
    c4t3 = new Plinko (174, 120,10);
    c4t4 = new Plinko (174, 160,10);
    c4t5 = new Plinko (174, 200,10); 
    c4t6 = new Plinko (174,240,10);
    c4t7 = new Plinko (174, 280,10);
    c4t8 = new Plinko (174, 320,10);
    c4t9 = new Plinko (174, 360,10); 
    c4t10 = new Plinko(174,400,10);
    c4t11= new Plinko (174, 440,10);


    // column 5 from top  
    c5t1 = new Plinko (230, 40,10);
    c5t2 = new Plinko (230, 80,10);
    c5t3 = new Plinko (230, 120,10);
    c5t4 = new Plinko (230, 160,10);
    c5t5 = new Plinko (230, 200,10); 
    c5t6 = new Plinko (230,240,10);
    c5t7 = new Plinko (230, 280,10);
    c5t8 = new Plinko (230, 320,10);
    c5t9 = new Plinko (230, 360,10); 
    c5t10 = new Plinko(230,400,10);
    c5t11= new Plinko (230, 440,10);


    // column 6 from top  
    c6t1 = new Plinko (286, 40,10);
    c6t2 = new Plinko (286, 80,10);
    c6t3 = new Plinko (286, 120,10);
    c6t4 = new Plinko (286, 160,10);
    c6t5 = new Plinko (286, 200,10); 
    c6t6 = new Plinko (286,240,10);
    c6t7 = new Plinko (286, 280,10);
    c6t8 = new Plinko (286, 320,10);
    c6t9 = new Plinko (286, 360,10); 
    c6t10 = new Plinko(286,400,10);
    c6t11= new Plinko (286, 440,10);


    // column 7 from top  
    c7t1 = new Plinko (342, 40,10);
    c7t2 = new Plinko (342, 80,10);
    c7t3 = new Plinko (342, 120,10);
    c7t4 = new Plinko (342, 160,10);
    c7t5 = new Plinko (342, 200,10); 
    c7t6 = new Plinko (342,240,10);
    c7t7 = new Plinko (342, 280,10);
    c7t8 = new Plinko (342, 320,10);
    c7t9 = new Plinko (342, 360,10); 
    c7t10 = new Plinko(342,400,10);
    c7t11= new Plinko (342, 440,10);


    // column 8 from top  
    c8t1 = new Plinko (398, 40,10);
    c8t2 = new Plinko (398, 80,10);
    c8t3 = new Plinko (398, 120,10);
    c8t4 = new Plinko (398, 160,10);
    c8t5 = new Plinko (398, 200,10); 
    c8t6 = new Plinko (398,240,10);
    c8t7 = new Plinko (398, 280,10);
    c8t8 = new Plinko (398, 320,10);
    c8t9 = new Plinko (398, 360,10); 
    c8t10 = new Plinko(398,400,10);
    c8t11= new Plinko (398, 440,10);


    // column 9 from top  
    c9t1 = new Plinko (454, 40,10);
    c9t2 = new Plinko (454, 80,10);
    c9t3 = new Plinko (454, 120,10);
    c9t4 = new Plinko (454, 160,10);
    c9t5 = new Plinko (454, 200,10); 
    c9t6 = new Plinko (454,240,10);
    c9t7 = new Plinko (454, 280,10);
    c9t8 = new Plinko (454, 320,10);
    c9t9 = new Plinko (454, 360,10); 
    c9t10 = new Plinko(454,400,10);
    c9t11= new Plinko (454, 440,10);

    



    

   
     






}

function draw() {
  background("black"); 
  Engine.update(engine);

  ground.display();

  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  division8.display();


  c1t1.display();
  c1t2.display();
  c1t3.display();
  c1t4.display();
  c1t5.display();
  c1t6.display();
  c1t7.display();  
  c1t8.display();
  c1t9.display();
  c1t10.display();
  c1t11.display();  

  c2t1.display();
  c2t2.display();
  c2t3.display();
  c2t4.display();
  c2t5.display();
  c2t6.display();
  c2t7.display();  
  c2t8.display();
  c2t9.display();
  c2t10.display();
  c2t11.display();

  c3t1.display();
  c3t2.display();
  c3t3.display();
  c3t4.display();
  c3t5.display();
  c3t6.display();
  c3t7.display();  
  c3t8.display();
  c3t9.display();
  c3t10.display();
  c3t11.display();
  
  
  c4t1.display();
  c4t2.display();
  c4t3.display();
  c4t4.display();
  c4t5.display();
  c4t6.display();
  c4t7.display();  
  c4t8.display();
  c4t9.display();
  c4t10.display();
  c4t11.display();

  c5t1.display();
  c5t2.display();
  c5t3.display();
  c5t4.display();
  c5t5.display();
  c5t6.display();
  c5t7.display();  
  c5t8.display();
  c5t9.display();
  c5t10.display();
  c5t11.display();
  
  
  c6t1.display();
  c6t2.display();
  c6t3.display();
  c6t4.display();
  c6t5.display();
  c6t6.display();
  c6t7.display();  
  c6t8.display();
  c6t9.display();
  c6t10.display();
  c6t11.display();
  
  c7t1.display();
  c7t2.display();
  c7t3.display();
  c7t4.display();
  c7t5.display();
  c7t6.display();
  c7t7.display();  
  c7t8.display();
  c7t9.display();
  c7t10.display();
  c7t11.display();

  c8t1.display();
  c8t2.display();
  c8t3.display();
  c8t4.display();
  c8t5.display();
  c8t6.display();
  c8t7.display();  
  c8t8.display();
  c8t9.display();
  c8t10.display();
  c8t11.display();

  
  c9t1.display();
  c9t2.display();
  c9t3.display();
  c9t4.display();
  c9t5.display();
  c9t6.display();
  c9t7.display();  
  c9t8.display();
  c9t9.display();
  c9t10.display();
  c9t11.display();

  if (frameCount%90===0) {
    particle1 = new Particle(200,200,20)
  }

  particle1.display();



 
  drawSprites();
}