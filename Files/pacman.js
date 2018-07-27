

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
    this.x = 6; //13.5
    this.y = 5;  //23
    this.r = 10;

    //-1 wegen 0
    this.lines = 30;
    this.columnes = 27;

    this.fieldx = this.x;
    this.fieldy = this.y;
    this.fieldr = this.r;

    // Speed
    this.Speed = 1;

    // Is this a copy of another Bird or a new one?
    // The Neural Network is Pacmans's "brain"
    // if (brain instanceof NeuralNetwork) {
    //   this.brain = brain.copy();
    //   this.brain.mutate(mutate);
    // } else {
      this.brain = new NeuralNetwork(5, 8, 4);
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
  // //Blinky
  //     // x position
  //     inputs[0] = 1;
  //     // y position
  //     inputs[1] = 1;
  //
  // //Pinky
  //     // x position
  //     inputs[2] = 1;
  //     // y position
  //     inputs[3] = 1;
  //
  // //Inky
  //     // x position
  //     inputs[4] = 1;
  //     // y position
  //     inputs[5] = 1;
  //
  // //Clyde
  //     // x position
  //     inputs[6] = 1;
  //     // y position
  //     inputs[7] = 1;
  //
  // //Pacman
  //     // x position
  //     inputs[8] = 1;
  //     // y position
  //     inputs[9] = 1;

  //Field Infromations
      let iv3 = Math.round(this.x);
      // console.log(this.x);
      let iv4 = Math.round(this.y);
      // console.log(this.y);


      // uper field
      if (FieldData[iv4-1][iv3] == 1) {
        inputs[0] = 0;
      } else {
        inputs[0] = 1;
      }
      // lower field
      if (FieldData[iv4+1][iv3] == 1) {
        inputs[1] = 0;
      } else {
        inputs[1] = 1;
      }
      // Left field
      if (FieldData[iv4][iv3-1] == 1) {
        inputs[2] = 0;
      } else {
        inputs[2] = 1;
      }
      // Right field
      if (FieldData[iv4][iv3+1] == 1) {
        inputs[3] = 0;
      } else {
        inputs[3] = 1;
      }

      // Current
      if (FieldData[iv4][iv3] == 4) {
        inputs[4] = 1;
      } else {
        inputs[4] = 0;
      }

      // console.log("up: "+inputs[0]);
      // console.log("low: "+inputs[1]);
      // console.log("l: "+inputs[2]);
      // console.log("r: "+inputs[3]);
      // console.log("current: "+inputs[4]);

  // //Position of Dot
  //     // x position
  //     inputs[15] = 1;
  //     // y position
  //     inputs[16] = 1;



      // console.log(inputs);
      // Get the outputs from the network
        var action = this.brain.predict(inputs);

        // console.log("action= "+action);

      var directonstate = this.directonstate(action);
      var CodeOfdesisionBevore;
      console.log(action);
      console.log(CodeOfdesisionBevore);
      if (directonstate === action[0] && CodeOfdesisionBevore != 0) {
        //Up
        this.y -= this.Speed;
        console.log("up");
        CodeOfdesisionBevore = 0;
      } else if (directonstate === action[1] && CodeOfdesisionBevore != 1) {
        //Down
        this.y += this.Speed;
        console.log("Down");
        CodeOfdesisionBevore = 1;
      } else if (directonstate === action[2] && CodeOfdesisionBevore != 2) {
        //left
        this.x -= this.Speed;
        console.log("Left");
        CodeOfdesisionBevore = 2;
      } else if (directonstate === action[3] && CodeOfdesisionBevore != 3) {
        //right
        this.x += this.Speed;
        console.log("Right");
        CodeOfdesisionBevore = 3;
        // console.log(this.Speed);
      } else {
        alert("Keine Richtung definiert.");
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

    if (FieldData[this.cy()][this.cx()] === 0) {
      FieldData[this.cy()][this.cx()] = 3;
      this.score++;
      // alert("s=="+this.score);
    }
    // // Every frame it is alive increases the score
  }
  cx() {
    return Math.round(this.x);
  }
  cy() {
    return Math.round(this.y);
  }
}
