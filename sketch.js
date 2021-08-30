//name spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// Only for debugging code, is this needed, not otherwise
// const Render = Matter.Render;

var myengine,myworld;
var ground, ball;
var slide, whiteBox, wall

function setup(){
    var canvas = createCanvas(800,500);
   
    myengine = Engine.create();
    myworld = myengine.world;

    //Code for brown ground
    var ground_options ={
        isStatic: true,
      
    }
    ground = Bodies.rectangle(400,490,800,20,ground_options);
    World.add(myworld,ground);
    console.log(ground);

    // Code for red box
    var redBox_options ={
        isStatic: true,
    }

    redBox = Bodies.rectangle(220,420,100,120,redBox_options);
    World.add(myworld,redBox);

    // Code for green box
    var greenBox_options ={
        isStatic: true,
    }

    
    var wall_options ={
        isStatic: true,
      
    }
    wall = Bodies.rectangle(790,250,20,800,wall_options);
    World.add(myworld,wall);
   

    greenBox = Bodies.rectangle(350,420,100,120,greenBox_options);
    World.add(myworld,greenBox);

    // Code for yellow box
    var yellowBox_options ={
        isStatic: true,
        angle:-60
        
    }

    yellowBox = Bodies.rectangle(680,420,100,20,yellowBox_options);
    // Matter.Body.setAngle(yellowBox,130)
    World.add(myworld,yellowBox);

    // Code for ball
    var ball_options ={
        isStatic: false,
        restitution: 1.42
    }

    ball = Bodies.circle(150,10,20, ball_options);
    World.add(myworld,ball);

    var stairs_options = {
        isStatic: true,
    }

    stair1 = Bodies.rectangle(90,100,100,25,stairs_options)
    World.add(myworld,stair1)

    stair2 = Bodies.rectangle(150,150,100,25,stairs_options)
    World.add(myworld,stair2)

    stair3 = Bodies.rectangle(200,200,100,25,stairs_options)
    World.add(myworld,stair3)

    stair4 = Bodies.rectangle(250,250,100,25,stairs_options)
    World.add(myworld,stair4)

    stair5 = Bodies.rectangle(300,300,100,25,stairs_options)
    World.add(myworld,stair5)

   var chandelier1_options ={
    isStatic : false,
    restitution : 0.3,
   }

   chandelier1 = Bodies.rectangle(460,150,210,10,chandelier1_options)
   World.add(myworld,chandelier1)

   var chandelier3_options ={
    isStatic : false,
    restitution : 0.3,
   }

   chandelier3 = Bodies.rectangle(460,135.05000027777805,10,10,chandelier3_options)
   World.add(myworld,chandelier3)
   
   chandelier4 = Bodies.rectangle(500,135.05000027777805,10,10,chandelier3_options)
   World.add(myworld,chandelier4)

   chandelier5 = Bodies.rectangle(420,135.05000027777805,10,10,chandelier3_options)
   World.add(myworld,chandelier5)

   chandelier6 = Bodies.rectangle(540,135.05000027777805,10,10,chandelier3_options)
   World.add(myworld,chandelier6)
   
   chandelier7 = Bodies.rectangle(380,135.05000027777805,10,10,chandelier3_options)
   World.add(myworld,chandelier7)

  var chandelier4_options ={
    isStatic: false,
    //restitution: 1.2
  }

   chandelier8 = Bodies.rectangle(400,135.050000277778050,10,10,chandelier4_options)
   World.add(myworld,chandelier8)
   
   chandelier9 = Bodies.rectangle(440,135.050000277778050,10,10,chandelier4_options)
   World.add(myworld,chandelier9)

   chandelier10 = Bodies.rectangle(480,135.050000277778050,10,10,chandelier4_options)
   World.add(myworld,chandelier10)

   chandelier11 = Bodies.rectangle(520,135.050000277778050,10,10,chandelier4_options)
   World.add(myworld,chandelier11)
   

   var chandelier2_options ={
    isStatic : true,
    restitution: 0.2
   }
    chandelier2 = Bodies.rectangle(460,160,20,10,chandelier2_options)
    World.add(myworld,chandelier2)
  
    // Only for debugging code, is this needed, not otherwise
    // var render = Render.create({
    //   element: document.body,
    //   engine: myengine,
    //   options: {
    //     width: 1600,
    //     height: 700,
    //     wireframes: false
    //   }
    // });
    // Render.run(render);

    //console.log(ball);
}

function draw(){
    background("lightgreen");
    Engine.update(myengine);
    rectMode(CENTER);

    fill("blue")
    rect(chandelier1.position.x,chandelier1.position.y,200,10)
    
    fill("blue")
    rect(chandelier3.position.x,chandelier3.position.y,20,20)

    fill("blue")
    rect(chandelier4.position.x,chandelier4.position.y,20,20)

    fill("blue")
    rect(chandelier5.position.x,chandelier5.position.y,20,20)
    
    fill("blue")
    rect(chandelier6.position.x,chandelier6.position.y,20,20)

    fill("blue")
    rect(chandelier7.position.x,chandelier7.position.y,20,20)

    fill("blue")
    rect(chandelier2.position.x,chandelier2.position.y,20,10)

    fill("blue")
    rect(chandelier8.position.x,chandelier8.position.y,25,25)

    fill("blue")
    rect(chandelier9.position.x,chandelier9.position.y,25,25)

    fill("blue")
    rect(chandelier10.position.x,chandelier10.position.y,25,25)
    
    fill("blue")
    rect(chandelier11.position.x,chandelier11.position.y,25,25)

    fill("white")
    rect(stair1.position.x,stair1.position.y,100,25);

    fill("white")
    rect(stair2.position.x,stair2.position.y,100,25);

    fill("white")
    rect(stair3.position.x,stair3.position.y,100,25);

    fill("white")
    rect(stair4.position.x,stair4.position.y,100,25);

    fill("white")
    rect(stair5.position.x,stair5.position.y,100,25);

    fill("brown")
    rect(ground.position.x,ground.position.y,900,20);
    fill("red")
    rect(redBox.position.x,redBox.position.y,100,120);
    fill("green")
    rect(greenBox.position.x,greenBox.position.y,100,120);
   
    fill("yellow")
    push();
    translate(yellowBox.position.x,yellowBox.position.y);
    rotate(-45);
    rectMode(CENTER);
    rect(0, 0, 100, 20);
    pop();
   

    fill("red")
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);

    fill("black")
    rect(wall.position.x,wall.position.y,20,800);

console.log(chandelier3.position.y)

}
