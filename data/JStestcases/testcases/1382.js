function(parentObj) {
    "use strict";
    var temp_var = ((parentObj.registerB << 8) | parentObj.registerC) + 1;
    parentObj.registerB = (temp_var >> 8) & 0xFF;
    parentObj.registerC = temp_var & 0xFF;
}