function(flag) {
    var accmode = flag & 2097155;
    var perms = ['r', 'w', 'rw'][accmode];
    if ((flag & 512)) {
        perms += 'w';
    }
    return perms;
}