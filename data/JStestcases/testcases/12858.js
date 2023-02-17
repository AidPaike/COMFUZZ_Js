function(data) {
    var ret = {
        type: 'WINDOW_UPDATE',
        id: data.readUInt32BE(0, true) & 0x7fffffff,
        delta: data.readUInt32BE(4, true) & 0x7fffffff
    };
    return ret;
}