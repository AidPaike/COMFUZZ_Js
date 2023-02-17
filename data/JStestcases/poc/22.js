function(inlinee, v) {
    if (v > 0) {
        inlinee();
    } else {
        inlinee.x = 1.1;
    }
}