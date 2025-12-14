import { Cell } from "./Cell.js";

export class Grid {
  constructor(cols, rows) {
    this.cols = cols;
    this.rows = rows;
    this.cells = [];

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        this.cells.push(new Cell(x, y));
      }
    }
  }

  get(x, y) {
    if (x < 0 || y < 0 || x >= this.cols || y >= this.rows) {
      return null;
    }
    return this.cells[y * this.cols + x];
  }

  forEach(fn) {
    this.cells.forEach(fn);
  }

  neighbors(cell) {
    return [
      this.get(cell.x + 1, cell.y),
      this.get(cell.x - 1, cell.y),
      this.get(cell.x, cell.y + 1),
      this.get(cell.x, cell.y - 1)
    ].filter(c => c && !c.data.impassable);
  }
}
