function(buffer, opt_byteOffset) {
    this.uint8View_ = new Uint8Array(buffer, opt_byteOffset || 0);
    this.int8View_ = new Int8Array(buffer, opt_byteOffset || 0);
}