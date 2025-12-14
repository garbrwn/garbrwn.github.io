export class GridRenderer {
  constructor(svg, grid, cellSize = 20, colorFn = () => "#fff", onCellClicked) {
    this.svg = svg;
    this.grid = grid;
    this.cellSize = cellSize;
    this.colorFn = colorFn;
    this.onCellClicked = onCellClicked;
    this.rects = new Map();

    this.draw();
  }

  draw() {
    this.svg.setAttribute("width", this.grid.cols * this.cellSize);
    this.svg.setAttribute("height", this.grid.rows * this.cellSize);
    this.svg.innerHTML = "";

    this.grid.forEach(cell => {
      const rect = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
      );

      rect.setAttribute("x", cell.x * this.cellSize);
      rect.setAttribute("y", cell.y * this.cellSize);
      rect.setAttribute("width", this.cellSize);
      rect.setAttribute("height", this.cellSize);
      rect.setAttribute("stroke", "#ccc");
      
      rect.addEventListener("click", () =>{
        this.onCellClicked(cell);
      });
      this.svg.appendChild(rect);
      this.rects.set(cell, rect);
    });

    this.update();
  }

  update() {
    this.grid.forEach(cell => {
      const rect = this.rects.get(cell);
      rect.setAttribute("fill", this.colorFn(cell));
    });
  }
}
