function(orig, dir, near, far) {
    var u = (this.axis + 1) % 3;
    var v = (this.axis + 2) % 3;
    var d = dir[this.axis] + this.nu * dir[u] + this.nv * dir[v];
    var t = (this.nd - orig[this.axis] - this.nu * orig[u] - this.nv * orig[v]) / d;
    if (t < near || t > far)
        return null;
    var Pu = orig[u] + t * dir[u] - this.eu;
    var Pv = orig[v] + t * dir[v] - this.ev;
    var a2 = Pv * this.nu1 + Pu * this.nv1;
    if (a2 < 0)
        return null;
    var a3 = Pu * this.nu2 + Pv * this.nv2;
    if (a3 < 0)
        return null;
    if ((a2 + a3) > 1)
        return null;
    return t;
}