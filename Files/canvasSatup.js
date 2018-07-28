//Setup canvas


// How big is the population
let totalPopulation = 1;
// All active Pacmans (not yet collided with ghost)
let activePacs = [];
// All Pacmans for any given population
let allPacs = [];

// All time high score
let highScore = 0;


// Pipes
let pipes = [];
// A frame counter to determine when to add a pipe
let counter = 0;

// Training or just showing the current best
let runBest = false;
let runBestButton;

var actioinHistory = [0,1,2,3];

// Interface elements
let speedSlider;
let speedSpan;
let highScoreSpan;
let allTimeHighScoreSpan;










function setup() {
  let canvas = createCanvas(700, 775);
  canvas.parent('canvascontainer');

  // Access the interface elements
  speedSlider = select('#speedSlider');
  speedSpan = select('#speed');
  highScoreSpan = select('#hs');
  allTimeHighScoreSpan = select('#ahs');


  // Create a population
  for (let i = 0; i < totalPopulation; i++) {
    let Pac = new PacMan();
    activePacs[i] = Pac;
    allPacs[i] = Pac;
  }
}
