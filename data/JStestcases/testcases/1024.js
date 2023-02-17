function(o) {
    for (const x of o) {
        o[100] = 1;
        try {
            x.push();
        } catch (e) {}
    }
}