function() {
    if (!this.cBATT || this.MBCRam.length == 0) {
        return [];
    } else {
        return this.fromTypedArray(this.MBCRam);
    }
}