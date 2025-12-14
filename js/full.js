// ====================
// Cell
// ====================
class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.data = {
      active: true,   // walkable
      clicked: false,
      path: false
    };
  }
}

// ====================
// Grid
// ====================
class Grid {
  constructor(cols, rows) {
    this.cols = cols;
    this.rows = rows;
    this.cells = [];

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const c = new Cell(x, y);
        c.data.active = Math.random() > 0.3; // 70% walkable
        this.cells.push(c);
      }
    }
  }

  forEach(fn) {
    this.cells.forEach(fn);
  }

  get(x, y) {
    return this.cells.find(c => c.x === x && c.y === y);
  }

  neighbors(cell) {
    return [
      this.get(cell.x + 1, cell.y),
      this.get(cell.x - 1, cell.y),
      this.get(cell.x, cell.y + 1),
      this.get(cell.x, cell.y - 1)
    ].filter(c => c && c.data.active);
  }
}

// ====================
// Renderer
// ====================
class GridRenderer {
  constructor(svg, grid, size, colorFn, onCellClicked) {
    this.svg = svg;
    this.grid = grid;
    this.size = size;
    this.colorFn = colorFn;
    this.onCellClicked = onCellClicked;
    this.rects = new Map();
    this.draw();
  }

  draw() {
    this.svg.innerHTML = "";

    this.grid.forEach(cell => {
      const r = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
      );

      r.setAttribute("x", cell.x * this.size);
      r.setAttribute("y", cell.y * this.size);
      r.setAttribute("width", this.size);
      r.setAttribute("height", this.size);
      r.setAttribute("stroke", "#ccc");
      r.setAttribute("pointer-events", "all");
      r.style.cursor = "pointer";

      r.addEventListener("click", () => {
        this.onCellClicked(cell);
      });

      this.svg.appendChild(r);
      this.rects.set(cell, r);
    });

    this.update();
  }

  update() {
    this.grid.forEach(cell => {
      this.rects
        .get(cell)
        .setAttribute("fill", this.colorFn(cell));
    });
  }
}

// ====================
// A* Algorithm
// ====================
function heuristic(a, b) {
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

function runAStar(grid, start, goal, renderer) {
  const open = new Set([start]);
  const cameFrom = new Map();
  const g = new Map([[start, 0]]);
  const f = new Map([[start, heuristic(start, goal)]]);

  while (open.size > 0) {
    let current = [...open].reduce((a, b) =>
      (f.get(a) ?? Infinity) < (f.get(b) ?? Infinity) ? a : b
    );

    if (current === goal) {
      reconstructPath(cameFrom, current, renderer);
      return;
    }

    open.delete(current);

    for (const n of grid.neighbors(current)) {
      const tentative = g.get(current) + 1;

      if (tentative < (g.get(n) ?? Infinity)) {
        cameFrom.set(n, current);
        g.set(n, tentative);
        f.set(n, tentative + heuristic(n, goal));
        open.add(n);
      }
    }
  }
}

function reconstructPath(cameFrom, current, renderer) {
  while (cameFrom.has(current)) {
    current = cameFrom.get(current);
    current.data.path = true;
  }
  renderer.update();
}

// ====================
// Boot
// ====================
document.addEventListener("DOMContentLoaded", () => {
  const svg = document.getElementById("grid");
  const grid = new Grid(20, 20);

  const clicked = [];

  const renderer = new GridRenderer(
    svg,
    grid,
    20,
    c => {
      if (c.data.path) return "yellow";
      if (c.data.clicked) return "red";
      if (!c.data.active) return "#333";
      return "#fff";
    },
    cell => {
      if (clicked.length >= 2) return;
      if (!cell.data.active) return;

      cell.data.clicked = true;
      clicked.push(cell);
      renderer.update();

      if (clicked.length === 2) {
        runAStar(grid, clicked[0], clicked[1], renderer);
      }
    }
  );
});
