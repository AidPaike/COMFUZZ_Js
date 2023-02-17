function(a, p) {
    return a.pop(Reflect.construct(function() {}, arguments, p));
}