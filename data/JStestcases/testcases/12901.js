function() {
    var i = 0;
    do
        i++;
    while (i < 10) {
        do
            continue;
        while (false) {}
    }
    return true;
}