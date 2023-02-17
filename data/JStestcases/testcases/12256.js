function(graphSet) {
    for (var j = graphSet.length - 1; j >= 0; j--) {
        for (var k = graphSet[j].length - 1; k >= 0; k--) {
            if (!graphSet[j][k].isWall())
                return graphSet[j][k];
        }
    }
    throw "No end?";
}