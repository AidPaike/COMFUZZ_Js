function() {
    for (var [a, b] in {
            x: 7
        }) {
        if (a != "x" || b != 7)
            throw "fail";
    } {
        for (let [a, b] in {
                y: 8
            }) {
            if (a != "y" || b != 8)
                throw "fail";
        }
    }
    if (a != "x" || b != 7)
        throw "fail";
}