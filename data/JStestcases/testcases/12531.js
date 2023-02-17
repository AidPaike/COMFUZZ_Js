function(low, high) {
    let result = [];
    while (true) {
        let v = low & 0x7f;
        low = low >>> 7;
        if (high != 0) {
            let shiftIn = high << (32 - 7);
            low = low | shiftIn;
            high = high >> 7;
        }
        let msbIsSet = (v & 0x40) || false;
        if (((low == 0) && (high == 0) && !msbIsSet) ||
            ((low == -1) && (high == -1) && msbIsSet)) {
            result.push(v);
            break;
        }
        result.push(v | 0x80);
    }
    return result;
}