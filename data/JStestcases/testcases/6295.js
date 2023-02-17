function(obj) {
    if (!Object.isFrozen(obj)) {
        var t = obj.f;
        obj.f = t * 2;
    }
    return obj.f;
}