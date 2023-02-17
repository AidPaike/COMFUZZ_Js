function(sab) {
    var ta = new Uint8Array(sab);
    var tmp;
    while (1) {
        var index = (Math.random() * ta.length | 0) + 1;
        var value = (Math.random() * 256 | 0) + 1;
        tmp = ta[index];
        ta[index] = value;
        for (var i = 0; i < value; i++);
        ta[index] = tmp;
    }
}