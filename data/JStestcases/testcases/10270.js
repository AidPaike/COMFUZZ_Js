function(_a, _b) {
    if (Object.prototype.toString.call(_a) != Object.prototype.toString.call([]))
        return false;
    if (_a.length !== _b.length)
        return false;
    for (var i = 0; i < _a.length; i++)
        if (_a[i] !== _b[i])
            return false;
    return true;
}