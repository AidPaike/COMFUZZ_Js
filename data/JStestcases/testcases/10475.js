function(x, constructor) {
    "use strict";
    x[42] = null;
    return x[42] === undefined;
}