function(a, base, check) {
    var index;
    if (check) {
        index = base + 1;
    } else {
        index = base + 2;
    }
    var result = a[index];
    result += a[index + 1];
    result += a[index - 1];
    return result;
}