function(grid) {
    for (var x = 0; x < grid.length; x++) {
        for (var y = 0; y < grid[x].length; y++) {
            grid[x][y].f = 0;
            grid[x][y].g = 0;
            grid[x][y].h = 0;
            grid[x][y].parent = null;
        }
    }
}