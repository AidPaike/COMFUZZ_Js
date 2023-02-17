function() {
    var randomFactor = 1;
    this.LSFR15Table = this.getTypedArray(0x80000, 0, "int8");
    var LSFR = 0x7FFF; //Seed value has all its bits set.
    var LSFRShifted = 0x3FFF;
    for (var index = 0; index < 0x8000; ++index) {
        randomFactor = 1 - (LSFR & 1); //Docs say it's the inverse.
        this.LSFR15Table[0x08000 | index] = randomFactor;
        this.LSFR15Table[0x10000 | index] = randomFactor * 0x2;
        this.LSFR15Table[0x18000 | index] = randomFactor * 0x3;
        this.LSFR15Table[0x20000 | index] = randomFactor * 0x4;
        this.LSFR15Table[0x28000 | index] = randomFactor * 0x5;
        this.LSFR15Table[0x30000 | index] = randomFactor * 0x6;
        this.LSFR15Table[0x38000 | index] = randomFactor * 0x7;
        this.LSFR15Table[0x40000 | index] = randomFactor * 0x8;
        this.LSFR15Table[0x48000 | index] = randomFactor * 0x9;
        this.LSFR15Table[0x50000 | index] = randomFactor * 0xA;
        this.LSFR15Table[0x58000 | index] = randomFactor * 0xB;
        this.LSFR15Table[0x60000 | index] = randomFactor * 0xC;
        this.LSFR15Table[0x68000 | index] = randomFactor * 0xD;
        this.LSFR15Table[0x70000 | index] = randomFactor * 0xE;
        this.LSFR15Table[0x78000 | index] = randomFactor * 0xF;
        LSFRShifted = LSFR >> 1;
        LSFR = LSFRShifted | (((LSFRShifted ^ LSFR) & 0x1) << 14);
    }
    this.LSFR7Table = this.getTypedArray(0x800, 0, "int8");
    LSFR = 0x7F; //Seed value has all its bits set.
    for (index = 0; index < 0x80; ++index) {
        randomFactor = 1 - (LSFR & 1); //Docs say it's the inverse.
        this.LSFR7Table[0x080 | index] = randomFactor;
        this.LSFR7Table[0x100 | index] = randomFactor * 0x2;
        this.LSFR7Table[0x180 | index] = randomFactor * 0x3;
        this.LSFR7Table[0x200 | index] = randomFactor * 0x4;
        this.LSFR7Table[0x280 | index] = randomFactor * 0x5;
        this.LSFR7Table[0x300 | index] = randomFactor * 0x6;
        this.LSFR7Table[0x380 | index] = randomFactor * 0x7;
        this.LSFR7Table[0x400 | index] = randomFactor * 0x8;
        this.LSFR7Table[0x480 | index] = randomFactor * 0x9;
        this.LSFR7Table[0x500 | index] = randomFactor * 0xA;
        this.LSFR7Table[0x580 | index] = randomFactor * 0xB;
        this.LSFR7Table[0x600 | index] = randomFactor * 0xC;
        this.LSFR7Table[0x680 | index] = randomFactor * 0xD;
        this.LSFR7Table[0x700 | index] = randomFactor * 0xE;
        this.LSFR7Table[0x780 | index] = randomFactor * 0xF;
        LSFRShifted = LSFR >> 1;
        LSFR = LSFRShifted | (((LSFRShifted ^ LSFR) & 0x1) << 6);
    }
    if (!this.noiseSampleTable && this.memory.length == 0x10000) {
        this.noiseSampleTable = ((this.memory[0xFF22] & 0x8) == 0x8) ? this.LSFR7Table : this.LSFR15Table;
    }
}