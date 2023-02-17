function(t, prop) {
    var foo = {
        bar: 1
    };
    return Object.getOwnPropertyDescriptor(foo, "bar");
}