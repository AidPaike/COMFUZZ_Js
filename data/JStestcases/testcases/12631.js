function(n, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10) {
    for (var i = 0; i < n; ++i) {
        var tmp = v1;
        v1 = v2;
        v2 = v3;
        v3 = v4;
        v4 = v5;
        v5 = v6;
        v6 = v7;
        v7 = v8;
        v8 = v9;
        v9 = v10;
        v10 = tmp;
    }
    return v1;
}