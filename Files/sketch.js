function draw() {
  Field();


  // Should we speed up cycles per frame
  let cycles = speedSlider.value();
  speedSpan.html(cycles);


  // How many times to advance the game
  for (let n = 0; n < cycles; n++) {
      for (let i = activePacs.length - 1; i >= 0; i--) {
        let PacMan = activePacs[i];
        // Pacman uses its brain!
        PacMan.think(FieldData);
        PacMan.update();


        if (FieldData[PacMan.cy()][PacMan.cx()] === 1) {
          // Remove this Pacman
          console.log("hit!");
          activePacs.splice(i, 1);
        }



          // console.log(PacMan.directonstate());
          //Reamove if stay still
          var cIsS = 0;
          var cIsSx = 0;
          var cIsSy = 0;

          if (PacMan.cy() == cIsSy && PacMan.cx() == cIsSx) {
            cIsS++;
            if (cIsS >= 4) {
              // Remove this Pacman
              console.warn("Stand Still");
              cIsS = 0;
              activePacs.splice(i, 1);
              break;
            }
          } else {
            cIsS = 0;
            cIsSx = PacMan.cx();
            cIsSy = PacMan.cy();
          }

          // console.log(actioinHistory);
          if (actioinHistory[0] === actioinHistory[2] && actioinHistory[1] === actioinHistory[3] && actioinHistory[0] != actioinHistory[1]) {
            console.warn("Stand wiggeling");
            activePacs.splice(i, 1);
            break;
          }


      }

    // Add a new pipe every so often
    // if (counter % 75 == 0) {
    //   pipes.push(new Ghost());
    // }

    // console.log(counter);

  }

  // What is highest score of the current population
  let tempHighScore = 0;

    // Which is the best bird?
    let tempBestPacMan = null;
    for (let i = 0; i < activePacs.length; i++) {
      let s = activePacs[i].score;
      if (s > tempHighScore) {
        tempHighScore = s;
        tempBestPacMan = activePacs[i];
      }
    }

    // Is it the all time high scorer?
    if (tempHighScore > highScore) {
      highScore = tempHighScore;
      bestPacMan = tempBestPacMan;
    } else {
    // Just one bird, the best one so far
    tempHighScore = bestPacMan.score;
    if (tempHighScore > highScore) {
      highScore = tempHighScore;
    }
  }


  // Update DOM Elements
  highScoreSpan.html(tempHighScore);
  allTimeHighScoreSpan.html(highScore);

  for (let e = 0; e < activePacs.length; e++) {
    activePacs[e].show();
  }
  for (let i = 0; i < GhostNames.length; i++) {
    Ghosts[i].show(GhostNames[i]);
  }

  // If we're out of birds go to the next generation
  if (activePacs.length == 0) {
    nextGeneration();
  }
}
