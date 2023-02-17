function(parentObj, address, data) {
    if (parentObj.modeSTAT < 3) { //VRAM cannot be written to during mode 3
        if (parentObj.memory[address] != data) {
            parentObj.graphicsJIT();
            parentObj.memory[address] = data;
            parentObj.generateGBOAMTileLine(address);
        }
    }
}