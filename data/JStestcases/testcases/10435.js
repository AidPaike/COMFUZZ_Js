function(parentObj, address) {
    "use strict";
    return parentObj.ROM[parentObj.currentROMBank + address];
}