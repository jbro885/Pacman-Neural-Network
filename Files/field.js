//Build the Field

function Field() {

//Multidimensional Array Per dimansion 1 a new rect dimension 2==Cords
var FieldRects = [
  [20, 20, 60, 120],
  [200, 340, 60, 120],
  [400, 20, 60, 120],
];


  for (var i=0; i<FieldRects.length; i++) {
      stroke(255);
      fill(200);
      rect(FieldRects[i][0], FieldRects[i][1], FieldRects[i][2], FieldRects[i][3]);
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
