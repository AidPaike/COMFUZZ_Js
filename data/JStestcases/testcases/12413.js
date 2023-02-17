function() {
    const proto = [];
    const obj = Object.create(proto);
    obj[1] = "";
    proto[1];
    proto.bla = 42;
}