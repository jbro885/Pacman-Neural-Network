//Build the Field

function Field() {
background(0);
//Multidimensional Array Per dimansion 1 a new rect dimension 2==Cords


//
  for (var i=0; i<FieldData.length; i++) {
    for (var c=0; c<FieldData[i].length; c++) {
      if (FieldData[i][c] === 1) {
        stroke(255);
        fill(200);
        rect(c*25, i*25, 25, 25);
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
