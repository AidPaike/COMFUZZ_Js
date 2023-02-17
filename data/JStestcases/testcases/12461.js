function(left, right) {
    if (left.length !== right.length) {
        throw "Can not interleave. Channel lengths differ.";
    }
    var stereoInterleaved = new Array(left.length * 2);
    for (var i = 0, len = left.length; i < len; i++) {
        stereoInterleaved[2 * i] = left[i];
        stereoInterleaved[2 * i + 1] = right[i];
    }
    return stereoInterleaved;
}