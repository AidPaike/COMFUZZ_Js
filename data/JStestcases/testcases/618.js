function(a) {
    var i;
    if (a.push)
        i = 0;
    else
        i = a;
    var result = 0;
    while (i < 10) {
        result += a[i];
        i++;
    }
    return result;
}