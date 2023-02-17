function(index, data) {
    "use strict";
    if (this.gbcBGRawPalette[index] != data) {
        this.midScanLineJIT();
        this.gbcBGRawPalette[index] = data;
        if ((index & 0x06) == 0) {
            data = 0x2000000 | this.RGBTint((this.gbcBGRawPalette[index | 1] << 8) | this.gbcBGRawPalette[index & 0x3E]);
            index >>= 1;
            this.gbcBGPalette[index] = data;
            this.gbcBGPalette[0x20 | index] = 0x1000000 | data;
        } else {
            data = this.RGBTint((this.gbcBGRawPalette[index | 1] << 8) | this.gbcBGRawPalette[index & 0x3E]);
            index >>= 1;
            this.gbcBGPalette[index] = data;
            this.gbcBGPalette[0x20 | index] = 0x1000000 | data;
        }
    }
}