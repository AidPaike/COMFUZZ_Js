function(top16) {
    var buf = new ArrayBuffer(8);
    var floats = new Float64Array(buf);
    var ints = new Uint16Array(buf);
    ints[0] = 0xacac;
    ints[1] = 0xdd33;
    ints[2] = 0x1b2f;
    ints[3] = top16;
    return floats[0];
}