function(s) {
    for (var i = 0; i < s.length; i++) {
        var c = s.charCodeAt(i);
        this.cumulative_checksum = (this.cumulative_checksum << 1) ^ c;
    }
}