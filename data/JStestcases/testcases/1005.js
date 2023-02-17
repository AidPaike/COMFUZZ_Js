function() {
    "use strict";
    this.initMemory(); //Write the startup memory.
    this.ROMLoad(); //Load the ROM into memory and get cartridge information from it.
    this.initLCD(); //Initialize the graphics.
    this.initSound(); //Sound object initialization.
    this.run(); //Start the emulation.
}