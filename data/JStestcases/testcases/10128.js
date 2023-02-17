function() {
    "use strict";
    this.memory = this.getTypedArray(0x10000, 0, "uint8");
    this.frameBuffer = this.getTypedArray(23040, 0xF8F8F8, "int32");
    this.BGCHRBank1 = this.getTypedArray(0x800, 0, "uint8");
    this.TICKTable = this.toTypedArray(this.TICKTable, "uint8");
    this.SecondaryTICKTable = this.toTypedArray(this.SecondaryTICKTable, "uint8");
    this.channel3PCM = this.getTypedArray(0x20, 0, "int8");
}