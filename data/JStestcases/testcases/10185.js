function() {
    const v6 = new String();
    v6.POSITIVE_INFINITY = 1337;
    const v8 = Object.seal(v6);
    v8.POSITIVE_INFINITY = Object;
}