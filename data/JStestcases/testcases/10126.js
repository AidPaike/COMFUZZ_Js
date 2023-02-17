function(obj, prop) {
    obj[prop] = "protoValue";
    Object.freeze(obj);
}