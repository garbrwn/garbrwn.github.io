function heuristic(a, b)
{
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

export function runAStar(grid, start, goal, renderer)
{
    const open = new Set([start]);
    const cameFrom = new Map();

    //AStar variables
    // G = Cost from start
    // F = Estimated total cost
    // H = Heuristic

    const g = new Map([[start, 0]]);
    const f = new Map([[start, heuristic(start, goal)]]);

    while(open.size > 0){
        let current = [...open].reduce((a, b) =>
        (f.get(a) ?? Infinity) < (f.get(b) ?? Infinity) ? a : b
        );

        if(current === goal){
            reconstructPath(cameFrom, current, renderer);
            return;
        }

        open.delete(current);

        for (const n of grid.neighbors(current)) {
            const tentative = g.get(current) + 1;

            if(tentative < (g.get(n) ?? Infinity)){
                cameFrom.set(n, current);
                g.set(n, tentative);
                f.set(n, tentative + heuristic(n, goal));
                open.add(n);
            }
        }
    }
    
}

function reconstructPath(cameFrom, current, renderer)
{
    while(cameFrom.has(current)){
        current = cameFrom.get(current);
        current.data.path = true;
    }
    renderer.update();
}