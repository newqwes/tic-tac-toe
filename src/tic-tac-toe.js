class TicTacToe {
  constructor() {
    this.matrix = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];

    this.currentPlayerSymbol = 'x';

    this.winer = null;

    this.turns = false;

    this.draw = false;
  }

  getCurrentPlayerSymbol() {
    return this.currentPlayerSymbol;
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.matrix[rowIndex][columnIndex]) return;

    if (this.matrix.join().length === 16) {
      this.turns = true;
    }

    if (this.isFinished()) return;

    this.matrix[rowIndex][columnIndex] = this.currentPlayerSymbol;

    if (this.isFinished()) this.winer = this.currentPlayerSymbol;

    if (!this.winer && this.turns) {
      this.draw = true;
    }

    this.currentPlayerSymbol = this.currentPlayerSymbol === 'x' ? 'o' : 'x';
  }

  isFinished() {
    let result = false;

    this.matrix.forEach(row => {
      if (row[0] && row[0] === row[1] && row[0] === row[2]) {
        result = true;
      }
    });

    if (
      this.matrix[0][0] &&
      this.matrix[0][0] === this.matrix[1][1] &&
      this.matrix[0][0] === this.matrix[2][2]
    ) {
      result = true;
    }

    if (
      this.matrix[0][2] &&
      this.matrix[0][2] === this.matrix[1][1] &&
      this.matrix[0][2] === this.matrix[2][0]
    ) {
      result = true;
    }

    if (
      this.matrix[0][0] &&
      this.matrix[0][0] === this.matrix[1][0] &&
      this.matrix[0][0] === this.matrix[2][0]
    ) {
      result = true;
    }

    if (
      this.matrix[0][1] &&
      this.matrix[0][1] === this.matrix[1][1] &&
      this.matrix[0][1] === this.matrix[2][1]
    ) {
      result = true;
    }

    if (
      this.matrix[0][2] &&
      this.matrix[0][2] === this.matrix[1][2] &&
      this.matrix[0][2] === this.matrix[2][2]
    ) {
      result = true;
    }

    return this.draw || result;
  }

  getWinner() {
    return this.winer;
  }

  noMoreTurns() {
    return this.turns;
  }

  isDraw() {
    return this.draw;
  }

  getFieldValue(rowIndex, colIndex) {
    return this.matrix[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
