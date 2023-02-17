function(size) {
    let b = new SharedArrayBuffer(size);
    let v = new Int32Array(b);
    return {
        buffer: b,
        view: v
    };
}