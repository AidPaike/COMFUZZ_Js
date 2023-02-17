function(loc1, loc2) {
    return loc1.scriptId == loc2.scriptId && loc1.lineNumber == loc2.lineNumber &&
        loc1.columnNumber == loc2.columnNumber;
}