function(id, fin, data) {
    if (!fin && !data.length) return [];
    var frame = new Buffer(8 + data.length);
    frame.writeUInt32BE(id & 0x7fffffff, 0, true);
    frame.writeUInt32BE(data.length & 0x00ffffff, 4, true);
    frame.writeUInt8(fin ? 0x01 : 0x0, 4, true);
    if (data.length) data.copy(frame, 8);
    return frame;
}