function(tileAmount) {
    var tileArray = [];
    var tileNumber = 0;
    while (tileNumber < tileAmount) {
        tileArray[tileNumber++] = this.getTypedArray(64, 0, "uint8");
    }
    return tileArray;
}