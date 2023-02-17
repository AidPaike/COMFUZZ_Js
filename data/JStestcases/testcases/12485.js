function(value) {
    "use strict";
    var r = value & 0x1F;
    var g = (value >> 5) & 0x1F;
    var b = (value >> 10) & 0x1F;
    return ((r * 13 + g * 2 + b) >> 1) << 16 | (g * 3 + b) << 9 | (r * 3 + g * 2 + b * 11) >> 1;
}