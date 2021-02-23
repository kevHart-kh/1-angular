import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  board: Array<Array<String>> = Array<Array<String>>();

  giliran = 0;

  baris: number = 0;
  kolom: number = 0;

  constructor() {
    this.reset();
  }

  reset() {
    this.baris = 0;
    this.kolom = 0;
    this.giliran = 0;

    // alert("this.board1");
    for (var i = 0; i < 5; i++) {
      var temp = ["*", "*", "*", "*", "*"];
      this.board[i] = temp;
    }
  }

  submit() {
    var tempBoard = this.board;

    if (tempBoard[this.baris][this.kolom] != "*") {
      alert("koordinat yang dipilih telah dipilih");
      return;
    }
    tempBoard[this.baris][this.kolom] = "" + this.giliran;

    var isMenang = false;
    //horizontal
    for (var i = 0; i < 5 && !isMenang; i++) {
      var count = 0;
      for (var j = 0; j < 5 && !isMenang; j++) {
        var isFound = false;
        if (tempBoard[i][j] == "" + this.giliran) {
          count++;
          isFound = true;
        } else if (isFound) {
          break;
        }
      }
      if (count == 4) {
        alert("USER " + this.giliran + " MENANGG");
        this.reset();
      }
    }

    //vertikal
    for (var i = 0; i < 5 && !isMenang; i++) {
      var count = 0;
      for (var j = 0; j < 5 && !isMenang; j++) {
        var isFound = false;
        if (tempBoard[j][i] == "" + this.giliran) {
          count++;
          isFound = true;
        } else if (isFound) {
          break;
        }
      }
      if (count == 4) {
        alert("USER " + this.giliran + " MENANGG");
        this.reset();
      }
    }

    this.giliran = (this.giliran + 1) % 2;
  }
}
