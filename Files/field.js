//Build the Field

function Field() {
background(0);
//Multidimensional Array Per dimansion 1 a new rect dimension 2==Cords


//
  for (var i=0; i<FieldData.length; i++) {
    for (var c=0; c<FieldData[i].length; c++) {
      //Wand
      if (FieldData[i][c] === 1) {
        // stroke(255);
        noStroke();
        fill(200);
        rect(c*25, i*25, 25, 25);
      }
      //Dot
      if (FieldData[i][c] === 0) {
        fill(222, 255, 102);
        noStroke();
        var dotwith = 10;
        ellipse(c*25+25/2, i*25+25/2, dotwith, dotwith);
      }
      //Kreuzung mit Punk
      if (FieldData[i][c] === 4) {
        fill(255, 0, 0);
        noStroke();
        var dotwith = 10;
        ellipse(c*25+25/2, i*25+25/2, dotwith, dotwith);
      }
      //Kreuzung ohne Punkt
      if (FieldData[i][c] === 5) {
        fill(255, 0, 0);
        noStroke();
        var dotwith = 10;
        ellipse(c*25+25/2, i*25+25/2, dotwith, dotwith);
      }
      //Eating
      if (FieldData[i][c] === 2) {
        noStroke();
        fill(255, 102, 179);
        var dotwith = 15;
        ellipse(c*25+25/2, i*25+25/2, dotwith, dotwith);
      }
    }
  }




  // Did this pipe hit a bird?
  // hits(bird) {
    //   if ((bird.y - bird.r) < this.top || (bird.y + bird.r) > (height - this.bottom)) {
      //     if (bird.x > this.x && bird.x < this.x + this.w) {
        //       return true;
        //     }
        //   }
        //   return false;
        // }

        // Draw the pipe

        // Update the pipe
        // update() {
        //   this.x -= this.speed;
        // }
        //
        // // Has it moved offscreen?
        // offscreen() {
        //   if (this.x < -this.w) {
        //     return true;
        //   } else {
        //     return false;
        //   }
        // }
      }
