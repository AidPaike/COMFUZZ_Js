function(line) {
    "use strict";
    this.spriteCount = 252;
    if (this.cGBC && this.gfxSpriteShow) { //Is the window enabled and are we in CGB mode?
        var lineAdjusted = line + 0x10;
        var yoffset = 0;
        var yCap = (this.gfxSpriteNormalHeight) ? 0x8 : 0x10;
        for (var OAMAddress = 0xFE00; OAMAddress < 0xFEA0 && this.spriteCount < 312; OAMAddress += 4) {
            yoffset = lineAdjusted - this.memory[OAMAddress];
            if (yoffset > -1 && yoffset < yCap) {
                this.spriteCount += 6;
            }
        }
    }
}