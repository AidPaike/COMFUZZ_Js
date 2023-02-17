function() {
    var c = this.rgb;
    var col = [c.r, c.g, c.b, c.a];
    return this.__class__.NAME + "(" + col.join(", ") + ")";
}