function(p) {
    var obj = {
        a: 1
    };
    obj.a = 1;
    obj[p] = 1;
    obj["b"] = obj.a;
    obj["2"] = obj[p];
    delete obj["b"];
    delete obj[p];
}