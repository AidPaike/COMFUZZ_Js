function(str) { // encode multi-byte string into utf-8 multiple single-byte characters 
    str = str.replace(
        /[\u0080-\u07ff]/g, // U+0080 - U+07FF = 2-byte chars
        function(c) {
            var cc = c.charCodeAt(0);
            return String.fromCharCode(0xc0 | cc >> 6, 0x80 | cc & 0x3f);
        }
    );
    str = str.replace(
        /[\u0800-\uffff]/g, // U+0800 - U+FFFF = 3-byte chars
        function(c) {
            var cc = c.charCodeAt(0);
            return String.fromCharCode(0xe0 | cc >> 12, 0x80 | cc >> 6 & 0x3F, 0x80 | cc & 0x3f);
        }
    );
    return str;
}