function() {
    var s = Math.floor(this._leftTime / 3600);
    var e = Math.floor(s / 24);
    var i = s % 24;
    return {
        s: s,
        e: e,
        i: i,
    }
}