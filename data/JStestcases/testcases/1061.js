function(b) {
    const max = Math.max(b ? -0 : 1, -1);
    return Object.is(max, -0);
}