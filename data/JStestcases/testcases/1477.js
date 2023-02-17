function() {
    var obj0 = {};
    var obj1 = {};
    var func0 = function(p0) {
        obj0.prop0;
    }
    obj1.method0 = func0;
    var obj3 = obj0;
    var i = 0;
    while (i < 3) {
        i++;
        obj0 = obj3;
        obj3 = obj1;
    }
    obj0.method0()
}