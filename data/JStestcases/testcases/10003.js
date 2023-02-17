function() {
    const a = {};
    const b = [];
    const unused = {
        __proto__: [],
        p1: a,
        p2: 0,
        p3: 0,
        p4: 0
    };

    function inline(x) {
        x.gaga;
    }
    inline(a);
    inline(b);
    b.p1 = 42;
}