function(res, lst) {
    for (var i = 0; i < lst.length; i++) {
        var o = lst[i];
        if (o instanceof Array) {
            arguments.callee(res, o);
        } else {
            res.push(o);
        }
    }
    return res;
}