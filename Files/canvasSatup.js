//Setup canvas

// Interface elements
let speedSlider;
let speedSpan;
let highScoreSpan;
let allTimeHighScoreSpan;

// All time high score
let highScore = 0;



function setup() {
  let canvas = createCanvas(700, 775);
  canvas.parent('canvascontainer');

  // Access the interface elements
  speedSlider = select('#speedSlider');
  speedSpan = select('#speed');
  highScoreSpan = select('#hs');
  allTimeHighScoreSpan = select('#ahs');
  runBestButton = select('#best');
  runBestButton.mousePressed(toggleState);

  // Create a population
  for (let i = 0; i < totalPopulation; i++) {
    let bird = new PacMan();
    activeBirds[i] = bird;
    allBirds[i] = bird;
  }
}
