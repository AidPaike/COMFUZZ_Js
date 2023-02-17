function(o) {
    var cnt = 0;
    var flag, flag1;
    var flag2;
    o();
    flag2 = undefined;
    return function() {
        flag = flag || true;
        flag1 = flag1 || 1;
        flag2 = flag2 || 2;
        return ++cnt;
    }
}