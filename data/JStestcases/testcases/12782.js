function(__v_9) {
    var __v_10 = 0;
    var count = 100000;
    while (count-- != 0) {
        var l = __v_9.push(0.5);
        if (++__v_10 >= 2) return __v_9;
        __v_10 = {};
    }
    return __v_9;
}