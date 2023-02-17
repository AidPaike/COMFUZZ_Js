function(parentObj, address, data) {
    "use strict";
    parentObj.ROMBank1offs = data & 0x7F;
    parentObj.setCurrentMBC2AND3ROMBank();
}