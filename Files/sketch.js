// Pipes
let pipes = [];
// A frame counter to determine when to add a pipe
let counter = 0;

// Training or just showing the current best
let runBest = false;
let runBestButton;


function draw() {
  Field();
  

  // Should we speed up cycles per frame
  let cycles = speedSlider.value();
  speedSpan.html(cycles);


  // How many times to advance the game
  for (let n = 0; n < cycles; n++) {
    // Show all the pipes
    // for (let i = pipes.length - 1; i >= 0; i--) {
    //   pipes[i].update();
    //   if (pipes[i].offscreen()) {
    //     pipes.splice(i, 1);
    //   }
    // }
    // Are we just running the best bird

      for (let i = activePacs.length - 1; i >= 0; i--) {
        let PacMan = activePacs[i];
        // Pacman uses its brain!
        PacMan.think(Ghost);
        PacMan.update();

        // Check all the pipes
        // for (let j = 0; j < pipes.length; j++) {
        //   // It's hit a pipe
        //   if (pipes[j].hits(activePacs[i])) {
        //     // Remove this bird
        //     activePacs.splice(i, 1);
        //     break;
        //   }
        // }

      }


    // Add a new pipe every so often
    // if (counter % 75 == 0) {
    //   pipes.push(new Ghost());
    // }
    counter++;
  }

  // What is highest score of the current population
  let tempHighScore = 0;

    // Which is the best bird?
    let tempBestBird = null;
    for (let i = 0; i < activePacs.length; i++) {
      let s = activePacs[i].score;
      if (s > tempHighScore) {
        tempHighScore = s;
        tempBestBird = activePacs[i];
      }
    }

    // Is it the all time high scorer?
    if (tempHighScore > highScore) {
      highScore = tempHighScore;
      bestBird = tempBestBird;
    }


  // Update DOM Elements
  highScoreSpan.html(tempHighScore);
  allTimeHighScoreSpan.html(highScore);

  // Draw everything!
  for (let i = 0; i < pipes.length; i++) {
    // pipes[i].show();
  }

}
