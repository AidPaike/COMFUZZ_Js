function(o) {
    const obj = {};
    const obj2 = {};
    delete o.a;
    obj.__proto__ = o;
    obj[0] = 1;
    obj.__proto__ = obj2;
    delete obj[0];
    return o;
}