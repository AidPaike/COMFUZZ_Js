function(address) {
    "use strict";
    return this.memoryReader[address](this, address); //This seems to be faster than the usual if/else.
}