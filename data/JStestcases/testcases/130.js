function() {
    var obj1 = {};
    var test44a = function() {
        return protoObj1 < obj1 || 1 != 1;
    };
    var protoObj1 = Object(obj1);
    obj1.prop0 = 1;
    for (var i = 0; test44a() && i < 1; ++i);
}