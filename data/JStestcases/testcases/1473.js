function() {
    "use strict";
    for (var counter = 0; counter < 4; counter++) {
        var adjustedIndex = counter << 1;
        this.cachedBGPaletteConversion[counter] = this.RGBTint((this.gbcBGRawPalette[adjustedIndex | 1] << 8) | this.gbcBGRawPalette[adjustedIndex]);
        this.cachedOBJPaletteConversion[counter] = this.RGBTint((this.gbcOBJRawPalette[adjustedIndex | 1] << 8) | this.gbcOBJRawPalette[adjustedIndex]);
    }
    for (counter = 4; counter < 8; counter++) {
        adjustedIndex = counter << 1;
        this.cachedOBJPaletteConversion[counter] = this.RGBTint((this.gbcOBJRawPalette[adjustedIndex | 1] << 8) | this.gbcOBJRawPalette[adjustedIndex]);
    }
    this.updateGBBGPalette = this.updateGBColorizedBGPalette;
    this.updateGBOBJPalette = this.updateGBColorizedOBJPalette;
    this.updateGBBGPalette(this.memory[0xFF47]);
    this.updateGBOBJPalette(0, this.memory[0xFF48]);
    this.updateGBOBJPalette(1, this.memory[0xFF49]);
    this.colorizedGBPalettes = true;
}