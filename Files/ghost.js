//Movment of the Ghosts
class Ghost {
  constructor() {
    //Start Position
    this.x = 1; //13.5
    this.y = 1;  //23
    this.r = 10;
    // Speed
    this.Speed = 1;
  }
  directionDecision(FieldData, PacmanXCord, PacmanYCord) {

    let thisX = Math.round(this.x);
console.log("thisX"+thisX);
    let thisY = Math.round(this.y);
console.log("thisY"+thisY);

    let poUp = FieldData[thisX][thisY-1];
console.log("poUp"+poUp);
    let poDown = FieldData[thisX][thisY+1];
console.log("poDown"+poDown);
    let poLeft = FieldData[thisX-1][thisY];
console.log("poLeft"+poLeft);
    let poRight = FieldData[thisX+1][thisY];
console.log("poRight"+poRight);
    let poThis = FieldData[thisX][thisY];
console.log("poThis"+poThis);

    if (thisX - PacmanXCord < 0) {
      if (poLeft != 1) {
        this.x -= this.Speed;
      } else if (poRight != 1) {
        this.x += this.Speed;
      } else {
        this.x = this.x;
      }
    } else if (thisX - PacmanXCord > 0) {
      if (poRight != 1) {
        this.x += this.Speed;
      } else if (poLeft != 1) {
        this.x -= this.Speed;
      } else {
        this.x = this.x;
      }
    } else if ((thisX - PacmanXCord) == 0) {
      if (poThis != 1) {
        this.x = this.x;
      }
    } else {
      alert("Keine Y Cordinate Definiert.")
    }



    // if (thisY - PacmanYCord < 0) {
    //   if (poUp != 1) {
    //     this.y -= this.Speed;
    //   } else if (poDown != 1) {
    //     this.y += this.Speed;
    //   } else {
    //     this.y = this.y;
    //   }
    // } else if (thisY - PacmanYCord > 0) {
    //   if (poDown != 1) {
    //     this.y += this.Speed;
    //   } else if (poUp != 1) {
    //     this.y -= this.Speed;
    //   } else {
    //     this.y = this.y;
    //   }
    // } else if (thisY - PacmanYCord == 0) {
    //   if (poThis != 1) {
    //     this.y = this.y;
    //   }
    // } else {
    //   alert("Keine Y Cordinate Definiert.")
    // }
  }
  // Display the Pacman
  show(name) {
    this.directionDecision(FieldData, 13, 23);

    if (name == "CLYDE" || name == 0) {
      // this.x = 1;
      // this.y = 1;
      fill(254, 160, 1);
    } else if (name == "BLINKY" || name == 1) {
      // this.x = 2;
      // this.y = 1;
      fill(253, 35, 4);
    } else if (name == "PINKY" || name == 2) {
      // this.x = 3;
      // this.y = 1;
      fill(254, 178, 178);
    } else if (name == "INKY" || name == 3) {
      // this.x = 4;
      // this.y = 1;
      fill(0, 223, 223);
    } else {
      alert("Keinen Geist Ausgewählt");
    }

//Pff
    ellipse(this.x*25+(12.5-this.r)+this.r, this.y*25+(12.5-this.r)+this.r, this.r * 2, this.r * 2);
  }
  update(FieldData, PacmanXCord, PacmanYCord) {
    this.directionDecision(FieldData, PacmanXCord, PacmanYCord);
  }
}
