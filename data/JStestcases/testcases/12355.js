function() {
    var objects = [Object.create(Object.create({
        prop: 1
    })), Object.create(Object.create({
        get prop() {
            return 2
        }
    }))];

    function g(o) {
        return o.prop;
    }
    var proto = {
        get prop() {
            try {
                g(objects[++j]);
            } catch (e) {}
            return 1;
        }
    };
    for (var i = 0; i < 10000; i++) {
        var o = Object.create(Object.create(proto));
        o[i] = i;
        objects.push(o);
    }
    var j = 0;
    g(objects[0]);
    g(objects[1]);
    g(objects[2]);
    g(objects[3]);
}