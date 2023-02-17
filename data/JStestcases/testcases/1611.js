function(graphSet) {
    for (var j = 0; j < graphSet.length; j++) {
        for (var k = 0; k < graphSet[j].length; k++) {
            if (!graphSet[j][k].isWall())
                return graphSet[j][k];
        }
    }
    throw "No start?";
}