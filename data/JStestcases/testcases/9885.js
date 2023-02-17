function(size, littleEndian) {
    var buffer = new ArrayBuffer(size * 14);
    var view = new DataView(buffer);
    for (var i = 0; i < size; ++i) {
        view.setInt8(i * 14, i);
        view.setUint8(i * 14 + 1, i);
        view.setInt16(i * 14 + 2, i * i, littleEndian);
        view.setUint16(i * 14 + 4, i * i, littleEndian);
        view.setInt32(i * 14 + 6, i * i * i, littleEndian);
        view.setUint32(i * 14 + 10, i * i * i, littleEndian);
    }
    return buffer;
}