function() {
    for (var {
            w: {
                x,
                y,
                z
            } = {
                x: 4,
                y: 5,
                z: 6
            }
        } of [{
            w: null
        }]) {
        return;
    }
}