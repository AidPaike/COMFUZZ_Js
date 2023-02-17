function() {
    var a = new Uint8Array(1);
    var b = a[-1] * 0;
    --b;
    return b <= 0 ? false : true;
}