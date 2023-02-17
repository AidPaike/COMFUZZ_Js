function(a, b, v) {
    if (b.length < 1)
        return;
    for (let i = 0; i < a.length; i++)
        a[i] = v;
    b[0] = 2.3023e-320;
}