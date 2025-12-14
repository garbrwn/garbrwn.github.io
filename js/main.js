import { Grid } from "./Grid.js";
import { GridRenderer } from "./GridRenderer.js";
import { enableGridInteraction } from "./gridInteraction.js";
import { runAStar } from "./AStar.js";

document.addEventListener("DOMContentLoaded", () => {
  const svg = document.getElementById("grid");
  const resetBtn = document.getElementById("reset");

  let grid; 
  let renderer;

  function init()
  {
    grid = new Grid(25, 25);

    const clicked = [];
    grid.forEach(cell => {
    cell.data.impassable = Math.random() > 0.7; // 70% walkable
  });
    renderer = new GridRenderer(
      document.getElementById("grid"),
      grid,
      20,
      c => {
          if(c.data.path) return "yellow";
          if(c.data.clicked) return "red";
          if(c.data.impassable) return "black";
          return "#fff";
      },
      cell =>{
        if(clicked.length >= 2) return;
        if(cell.data.impassable) return;

        cell.data.clicked = true;
        clicked.push(cell);
        renderer.update();

        if(clicked.length === 2){
          runAStar(grid, clicked[0], clicked[1], renderer);
        }
      }
    );

    enableGridInteraction(renderer);
  }

  resetBtn.addEventListener("click", init);

  init(); //initial load
});