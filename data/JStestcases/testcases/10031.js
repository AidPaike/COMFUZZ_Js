function(self) {
    var len = Math.sqrt(self[0] * self[0] + self[1] * self[1] + self[2] * self[2]);
    self[0] /= len;
    self[1] /= len;
    self[2] /= len;
    return self;
}