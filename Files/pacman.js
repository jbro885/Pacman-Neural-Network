

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
    this.x = 15; //13.5
    this.y = 15;  //23
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
    if (brain instanceof NeuralNetwork) {
      this.brain = brain.copy();
      this.brain.mutate(mutate);
    } else {
      this.brain = new NeuralNetwork(7, 32, 4);
      // this.brain = new NeuralNetwork(7, 32, 32, 4);
    }

    // Score is how many frames it's been alive
    this.score = 0;
    // Fitness is normalized version of score
    this.fitness = 0;
    // Score is how many food it's has eaten
    this.Foodscore = 0;
    // Foodfitness is normalized version of Foodscore
    this.Foodfitness = 0;
    // Give Generation Number
    this.GenerationNumber = GenerationNumber++;
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
  think(FieldData) {


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
      } else if (FieldData[iv4-1][iv3] == 3) {
        inputs[0] = 0.5;
      } else {
        inputs[0] = 1;
      }

      // uper2 field
      // if (iv4 >= 2) {
      //   if (FieldData[iv4-2][iv3] == 1) {
      //     inputs[1] = 0;
      //   } else if (FieldData[iv4-2][iv3] == 3) {
      //     inputs[1] = 0.5;
      //   } else {
      //     inputs[1] = 1;
      //   }
      // } else {
      //   inputs[1] = 0;
      // }

      // lower field
      if (FieldData[iv4+1][iv3] == 1) {
        inputs[1] = 0;
      } else if (FieldData[iv4+1][iv3] == 3) {
        inputs[1] = 0.5;
      } else {
        inputs[1] = 1;
      }

      // // lower2 field
      // if (iv4 > FieldData.length-1) {
      //   if (FieldData[iv4+2][iv3] == 1) {
      //     inputs[3] = 0;
      //   } else if (FieldData[iv4+2][iv3] == 3) {
      //     inputs[3] = 0.5;
      //   } else {
      //     inputs[3] = 1;
      //   }
      // } else {
      //   inputs[3] = 0;
      // }


      // Left field
      if (FieldData[iv4][iv3-1] == 1) {
        inputs[2] = 0;
      } else if (FieldData[iv4][iv3-1] == 3) {
        inputs[2] = 0.5;
      } else {
        inputs[2] = 1;
      }

      // if (iv3 >= 2) {
      //   // Left2 field
      //   if (FieldData[iv4][iv3-2] == 1) {
      //     inputs[5] = 0;
      //   } else if (FieldData[iv4][iv3-2] == 3) {
      //     inputs[5] = 0.5;
      //   } else {
      //     inputs[5] = 1;
      //   }
      // } else {
      //   inputs[5] = 0;
      // }
      // Right field
      if (FieldData[iv4][iv3+1] == 1) {
        inputs[3] = 0;
      } else if (FieldData[iv4][iv3+1] == 3) {
        inputs[3] = 0.5;
      } else {
        inputs[3] = 1;
      }

      // if (iv3 > FieldData[0].length-1) {
      //   // Right2 field
      //   if (FieldData[iv4][iv3+2] == 1) {
      //     inputs[7] = 0;
      //   } else if (FieldData[iv4][iv3+2] == 3) {
      //     inputs[7] = 0.5;
      //   } else {
      //     inputs[7] = 1;
      //   }
      // } else {
      //   inputs[7] = 0;
      // }

      // Current
      if (FieldData[iv4][iv3] == 4) {
        inputs[4] = 0;
      } else {
        inputs[4] = 1;
      }


      // inputs[5] = 1;
      inputs[5] = map(iv3, 0, 29, 0, 1);
      // inputs[6] = 1;
      inputs[6] = map(iv4, 0, 33, 0, 1);


      // console.log("up: "+inputs[0]);
      // console.log("low: "+inputs[1]);
      // console.log("l: "+inputs[2]);
      // console.log("r: "+inputs[3]);
      // console.log("current: "+inputs[4]);

  //Position of Dot
      // x position
      // inputs[5] = Math.random();
      // y position
      // inputs[6] = 1;



      // console.log(inputs);
      // Get the outputs from the network
        var action = this.brain.predict(inputs);
        // console.log(action);
        // console.log(inputs);
        actioinHistory[0] = actioinHistory[1];
        actioinHistory[1] = actioinHistory[2];
        actioinHistory[2] = actioinHistory[3];
        actioinHistory[3] = action[0];
        // console.log("action= "+action);

      var directonstate = this.directonstate(action);
      if (directonstate === 0) {
        //Up
        this.y -= this.Speed;
        // console.log("up");
      } else if (directonstate === 1) {
        //Down
        this.y += this.Speed;
        // console.log("Down");
      } else if (directonstate === 2) {
        //left
        this.x -= this.Speed;
        // console.log("Left");
      } else if (directonstate === 3) {
        //right
        this.x += this.Speed;
        // console.log("Right");
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
      // if (action[0]<=0.25) {
      //   return 0;
      // } else if (action[0]<=0.5) {
      //   return 1;
      // } else if (action[0]<=0.75) {
      //   return 2;
      // } else if (action[0]<=1) {
      //   return 3;
      // }
      let mx = Math.max(action[0], action[1], action[2], action[3]);
      if (action[0] === mx) {
          return 0;
        } else if (action[1] === mx) {
            return 1;
          } else if (action[2] === mx) {
              return 2;
            } else if (action[3] === mx) {
                return 3;
              }
      // let mx = Math.max(action[0], action[1]);
      // if (action[0] === mx && action[0] <= 0.5) {
      //     return 0;
      //   } else if (action[0] === mx && action[0] > 0.5) {
      //       return 1;
      //     } else if (action[1] === mx && action[1] <= 0.5) {
      //         return 2;
      //       } else if (action[1] === mx && action[1] > 0.5) {
      //           return 3;
      //         }

  }

  // Update Pacmans's position based on velocity, gravity, etc.
  update() {
    // this.Speed += this.gravity;
    // this.velocity *= 0.9;

    if (FieldData[this.cy()][this.cx()] === 0) {
      FieldData[this.cy()][this.cx()] = 3;
      this.score++;
      counter++;
      // alert("s=="+this.score);
    }
  }
  cx() {
    return Math.round(this.x);
  }
  cy() {
    return Math.round(this.y);
  }
}
