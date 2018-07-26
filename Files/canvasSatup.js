//Setup canvas

// Interface elements
let speedSlider;
let speedSpan;
let highScoreSpan;
let allTimeHighScoreSpan;

// All time high score
let highScore = 0;

// How big is the population
let totalPopulation = 100;
// All active Pacmans (not yet collided with ghost)
let activePacs = [];
// All Pacmans for any given population
let allPacs = [];


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
