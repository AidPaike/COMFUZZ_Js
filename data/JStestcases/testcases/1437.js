function(ary) {
    var filled = 0;
    for (var ii = 0; ii < ary.length; ++ii) {
        if (ii in ary) {
            ++filled;
        }
    }
    return filled;
}