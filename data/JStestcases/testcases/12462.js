function() {
    var amountOfProperties = 0;
    for (var p in {})
        ++amountOfProperties;
    console.__proto__.debug = 239;
    for (var p in {})
        --amountOfProperties;
    return amountOfProperties;
}