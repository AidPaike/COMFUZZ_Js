function(a) {
    var b = -1;
    switch (a ? a * 1 : a * 0.1) {
        case 0:
            b = 0;
            break;
        case 1:
            b = 1;
            break;
        case 2:
            b = 2;
            break;
        case 3:
            b = 3;
    }
    return b;
}