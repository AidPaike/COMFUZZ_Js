function(x, y, z) {
    var objResult = {};
    objResult.returnValue = x + y + z;
    objResult.returnVerifyResult = arguments[0] === "a" && arguments.length === 3;
    return objResult;
}