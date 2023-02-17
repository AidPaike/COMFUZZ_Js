function(unknown_i, unknown_n) {
    var sum = 0,
        a;
    a = [1, 2, 3, 4];
    for (var i = 0; i < 4; ++i)
        sum += a[i];
    a = [1, 2, 3, 4];
    for (var i = 3; i >= 0; --i)
        sum += a[i];
    a = [1, 2, 3, 4];
    for (var i = 0, j = 0; i < 4; ++i, ++j)
        sum += a[j];
    a = [1, 2, 3, 4];
    for (var i = 3, j = 3; i >= 0; --i, --j)
        sum += a[j];
    var a = [1, 2, 3, 4];
    for (var i = unknown_i; i < unknown_n; ++i)
        sum += a[i];
    a = [1, 2, 3, 4];
    for (var i = unknown_n - 1; i >= unknown_i; --i)
        sum += a[i];
    a = [1, 2, 3, 4];
    for (var i = unknown_i, j = unknown_i; i < unknown_n; ++i, ++j)
        sum += a[j];
    a = [1, 2, 3, 4];
    for (var i = unknown_n - 1, j = unknown_n - 1; i >= unknown_i; --i, --j)
        sum += a[j];
    return sum;
}