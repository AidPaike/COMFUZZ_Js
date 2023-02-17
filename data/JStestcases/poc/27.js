function(arg) {
    console.log("worker started");
    var ta = new Uint8Array(arg.data);
    var i = 0;
    while (1) {
        if (i == 0) {
            i = 1;
        } else {
            i = 0;
            ta[51] = 128;
        }
    }
}