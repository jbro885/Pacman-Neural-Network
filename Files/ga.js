// This file includes functions for creating a new generation
// of birds.

// Start the game over
function resetGame() {
  counter = 0;
  // Resetting best bird score to 0
  pipes = [];
}

// Create the next generation
function nextGeneration() {
  resetGame();
  // Normalize the fitness values 0-1
  normalizeFitness(allPacs);
  // Generate a new set of birds
  activePacs = generate(allPacs);
  // Copy those birds to another array
  allPacs = activePacs.slice();
}

// Generate a new population of Pacmans
function generate(oldPacs) {
  let newPacs = [];
  for (let i = 0; i < oldPacs.length; i++) {
    // Select a bird based on fitness
    let Pac = poolSelection(oldPacs);
    newPacs[i] = Pac;
  }
  return newPacs;
}

// Normalize the fitness of all birds
function normalizeFitness(Pacs) {
  // Make score exponentially better?
  for (let i = 0; i < Pacs.length; i++) {
    Pacs[i].score = pow(Pacs[i].score, 2);
  }

  // Add up all the scores
  let sum = 0;
  for (let i = 0; i < Pacs.length; i++) {
    sum += Pacs[i].score;
  }
  // Divide by the sum
  for (let i = 0; i < Pacs.length; i++) {
    Pacs[i].fitness = Pacs[i].score / sum;
  }
}


// An algorithm for picking one bird from an array
// based on fitness
function poolSelection(Pacs) {
  // Start at 0
  let index = 0;

  // Pick a random number between 0 and 1
  let r = random(1);

  // Keep subtracting probabilities until you get less than zero
  // Higher probabilities will be more likely to be fixed since they will
  // subtract a larger number towards zero
  while (r > 0) {
    r -= Pacs[index].fitness;
    // And move on to the next
    index += 1;
  }

  // Go back one
  index -= 1;

  // Make sure it's a copy!
  // (this includes mutation)
  return Pacs[index].copy();
}
