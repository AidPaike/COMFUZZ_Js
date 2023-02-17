function(size) {
    var buffer = new ArrayBuffer(size * 16);
    var view = new DataView(buffer);
    for (var i = 0; i < size; i++) {
        view.setFloat64(i * 16, Math.log10(i + 1));
        view.setFloat32(i * 16 + 8, Math.sqrt(i));
        view.setFloat32(i * 16 + 12, Math.cos(i));
    }
    return buffer;
}