

// Mutation function to be passed into bird.brain
function mutate(x) {
  if (random(1) < 0.1) {
    let offset = randomGaussian() * 0.5;
    let newx = x + offset;
    return newx;
  } else {
    return x;
  }
}

class PacMan {
  constructor(brain) {
    // position and size of start Pacman
    this.x = 13.5;
    this.y = 23;
    this.r = 10;

    //-1 wegen 0
    this.lines = 30;
    this.columnes = 27;

    this.fieldx = this.x;
    this.fieldy = this.y;
    this.fieldr = this.r;

    // Speed
    this.Speed = 0.05;

    // Is this a copy of another Bird or a new one?
    // The Neural Network is Pacmans's "brain"
    // if (brain instanceof NeuralNetwork) {
    //   this.brain = brain.copy();
    //   this.brain.mutate(mutate);
    // } else {
      this.brain = new NeuralNetwork(17, 32, 4);
    // }

    // Score is how many frames it's been alive
    this.score = 0;
    // Fitness is normalized version of score
    this.fitness = 0;
    // Score is how many food it's has eaten
    this.Foodscore = 0;
    // Foodfitness is normalized version of Foodscore
    this.Foodfitness = 0;
  }

  // Create a copy of this Pacman
  copy() {
    return new PacMan(this.brain);
  }

  // Display the Pacman
  show() {
    // console.log("Show() Run");
    fill(255, 240, 102);
    ellipse(this.x*25+(12.5-this.r)+this.r, this.y*25+(12.5-this.r)+this.r, this.r * 2, this.r * 2);
  }

  // This is the key function now that decides
  // if it should jump or not jump!
  think(Ghost) {


      // Now create the inputs to the neural network
      let inputs = [];

      var closest = 1;
  //Blinky
      // x position
      inputs[0] = 1;
      // y position
      inputs[1] = 1;

  //Pinky
      // x position
      inputs[2] = 1;
      // y position
      inputs[3] = 1;

  //Inky
      // x position
      inputs[4] = 1;
      // y position
      inputs[5] = 1;

  //Clyde
      // x position
      inputs[6] = 1;
      // y position
      inputs[7] = 1;

  //Pacman
      // x position
      inputs[8] = 1;
      // y position
      inputs[9] = 1;

  //Field Infromations
      let iv3 = Math.round(this.x);
      // console.log(this.x);
      let iv4 = Math.round(this.y);
      // console.log(this.y);

      // uper field
      inputs[10] = FieldData[iv4-1][iv3] / 10;
      // lower field
      inputs[11] = FieldData[iv4+1][iv3] / 10;
      // Left field
      inputs[12] = FieldData[iv4][iv3-1] / 10;
      // Right field
      inputs[13] = FieldData[iv4][iv3+1] / 10;
      // Right field
      inputs[14] = FieldData[iv4][iv3] / 10;
      console.log("up: "+inputs[10]);
      console.log("low: "+inputs[11]);
      console.log("l: "+inputs[12]);
      console.log("r: "+inputs[13]);
      console.log("current: "+inputs[14]);

  //Position of Dot
      // x position
      inputs[15] = 1;
      // y position
      inputs[16] = 1;



      // console.log(inputs);
      // Get the outputs from the network
      var action = this.brain.predict(inputs);
      // console.log("action= "+action);

      var directonstate = this.directonstate(action);
      if (directonstate === action[0]) {
        //Up
        this.y -= this.Speed;
        console.log("up");
      } else if (directonstate === action[1]) {
        //Down
        this.y += this.Speed;
        console.log("Down");
      } else if (directonstate === action[2]) {
        //left
        this.x -= this.Speed;
        console.log("Left");
      } else if (directonstate === action[3]) {
        //right
        this.x += this.Speed;
        console.log("Right");
        // console.log(this.Speed);
      } else {
        console.log("Keine Richtung definiert.");
      }



  }

  // // Jump up
  // updateDirection(direct) {
  //   // up
  //   if (direct === 1) {
  //
  //     return directonstate
  //
  //   }
  // }
  directonstate(action) {
    return Math.max(action[0], action[1], action[2], action[3]);
  }

  // Update Pacmans's position based on velocity, gravity, etc.
  update() {
    // this.Speed += this.gravity;
    // this.velocity *= 0.9;



// var directonstate = 3;
//
//     if (directonstate === 0) {
//       //Up
//       this.y -= this.Speed;
//     } else if (directonstate === 1) {
//       //Down
//       this.y += this.Speed;
//     } else if (directonstate === 2) {
//       //left
//       this.x -= this.Speed;
//     } else if (directonstate === 3) {
//       //right
//       this.x += this.Speed;
//     } else {
//       alert("Keine Richtung definiert.");
//     }


    // // Every frame it is alive increases the score
    // this.score++;
  }
  cx() {
    return Math.round(this.x);
  }
  cy() {
    return Math.round(this.y);
  }
}
