function(x, z) {
    try {
        throw new Error('meep!');
    } catch (e) {
        return e;
    }
}