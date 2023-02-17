function(value) {
    if (value > 100) {
        return value.toFixed(0);
    } else {
        return value.toPrecision(3);
    }
}