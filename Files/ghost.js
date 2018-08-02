//Movment of the Ghosts
class Ghost {
  construct() {
    //Start Position
    this.x = 13; //13.5
    this.y = 23;  //23
    this.r = 10;
    // Speed
    this.Speed = 1;
  }
  directionDecision(PacmanXCord, PacmanYCord) {
    let thisX = Math.round(this.x);
    let thisY = Math.round(this.y);




    if (thisX - PacmanXCord < 0) {
      this.x -= this.Speed;
    } else if (thisX - PacmanXCord > 0) {
      this.x += this.Speed;
    } else if (thisX - PacmanXCord = 0) {
      this.x = this.x;
    } else {
      alert("Keine Y Cordinate Definiert.")
    }



    if (thisY - PacmanYCord < 0) {
      this.y -= this.Speed;
    } else if (thisY - PacmanYCord > 0) {
      this.y += this.Speed;
    } else if (thisY - PacmanYCord = 0) {
      this.y = this.y;
    } else {
      alert("Keine Y Cordinate Definiert.")
    }
  }
  // Display the Pacman
  show(name) {
    if (name == "CLYDE" || name == 0) {
      fill(254, 160, 1);
    } else if (name == "BLINKY" || name == 1) {
      fill(253, 35, 4);
    } else if (name == "PINKY" || name == 2) {
      fill(254, 178, 178);
    } else if (name == "INKY" || name == 3) {
      fill(0, 223, 223);
    } else {
      alert("Keinen Geist Ausgewählt");
    }

//Pff
    ellipse(this.x*25+(12.5-this.r)+this.r, this.y*25+(12.5-this.r)+this.r, this.r * 2, this.r * 2);
  }
  update() {


}
