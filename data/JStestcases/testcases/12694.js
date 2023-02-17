function(parentObj) {
    "use strict";
    if (parentObj.FCarry) {
        var temp_pc = (parentObj.memoryRead((parentObj.programCounter + 1) & 0xFFFF) << 8) | parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter);
        parentObj.programCounter = (parentObj.programCounter + 2) & 0xFFFF;
        parentObj.stackPointer = (parentObj.stackPointer - 1) & 0xFFFF;
        parentObj.memoryWriter[parentObj.stackPointer](parentObj, parentObj.stackPointer, parentObj.programCounter >> 8);
        parentObj.stackPointer = (parentObj.stackPointer - 1) & 0xFFFF;
        parentObj.memoryWriter[parentObj.stackPointer](parentObj, parentObj.stackPointer, parentObj.programCounter & 0xFF);
        parentObj.programCounter = temp_pc;
        parentObj.CPUTicks += 12;
    } else {
        parentObj.programCounter = (parentObj.programCounter + 2) & 0xFFFF;
    }
}