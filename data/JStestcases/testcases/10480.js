function(obj) {
    for (let i = 0; i < 2000; ++i) {
        obj["prop" + i] = "prop_value";
    }
}