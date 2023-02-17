function() {
    var r = [];
    var i = 0;
    var j = 0;
    var shifts = [0, 1, 7, 8, 15, 16, 23, 24, 31];
    for (i = 0; i < shifts.length; i++)
        r[j++] = 1 << shifts[i];
    for (i = 0; i < shifts.length; i++)
        r[j++] = 1 << (shifts[i] + 32);
    for (i = 0; i < shifts.length; i++)
        r[j++] = 1 << (shifts[i] + 224);
    for (i = 0; i < shifts.length; i++)
        r[j++] = 1 << (shifts[i] + 256);
    return r.join(",");
}