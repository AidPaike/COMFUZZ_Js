function(a, b) {
    return Reflect.apply(String.fromCharCode, a, [b, {}]);
}