function(...input) {
    if (input.length == 1 && typeof input[0] == 'array') input = input[0];
    if (input.length == 1 && typeof input[0] == 'string') {
        let len = input[0].length;
        let view = new Uint8Array(len);
        for (let i = 0; i < len; i++) view[i] = input[0].charCodeAt(i);
        return view.buffer;
    }
    let view = new Uint8Array(input.length);
    for (let i = 0; i < input.length; i++) {
        let val = input[i];
        if (typeof val == 'string') {
            if (val.length != 1) {
                throw new Error('string inputs must have length 1');
            }
            val = val.charCodeAt(0);
        }
        view[i] = val | 0;
    }
    return view.buffer;
}