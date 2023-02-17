function() {
    var obj = {};
    var oob = "/re/";
    oob = oob.replace("re", "*".repeat(0x100000));
    var str = 'class x extends Array{' + oob + "}";
    var fun = eval(str);
    Object.assign(obj, fun);
    return obj;
}