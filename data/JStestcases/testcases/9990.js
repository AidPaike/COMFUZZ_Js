function() {
    var {
        x
    } = {
        x: 1
    };
    var [y] = [2];
    x; /**bp:evaluate('x == 1 && y == 2')**/
    ({
        x
    } = {
        x: 3
    });
    [y] = [4];
    y; /**bp:evaluate('x == 3 && y == 4')**/
    ({
        x,
        y: [y]
    } = {
        x: 5,
        y: [6]
    });
    y; /**bp:evaluate('x == 5 && y == 6')**/
}