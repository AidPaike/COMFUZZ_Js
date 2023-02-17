function(f) {
    var frames = f,
        current = 0,
        max = frames.length - 1;
    return function() {
        if (current == max) {
            current = 0;
        }
        return frames[current++];
    };
}