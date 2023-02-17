function(n) {
    var tab, i, j, len;
    len = 500;
    for (j = 0; j < n; j++) {
        tab = [];
        for (i = 0; i < len; i++)
            tab.push(i);
    }
    return len * n;
}