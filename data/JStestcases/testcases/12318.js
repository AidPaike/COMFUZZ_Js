function(scanlineToRender, drawableRange) {
    "use strict";
    var address = 0xFE00;
    var spriteCount = 0;
    var diff = 0;
    while (address < 0xFEA0 && spriteCount < 10) {
        diff = scanlineToRender - this.memory[address];
        if ((diff & drawableRange) == diff) {
            this.OAMAddressCache[spriteCount++] = address;
        }
        address += 4;
    }
    return spriteCount;
}