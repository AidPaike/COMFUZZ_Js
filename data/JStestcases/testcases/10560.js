function() {
    var dx, dy, dz, distance;
    var e = 0.0;
    var size = this.bodies.length;
    for (var i = 0; i < size; i++) {
        var bodyi = this.bodies[i];
        e += 0.5 * bodyi.mass *
            (bodyi.vx * bodyi.vx +
                bodyi.vy * bodyi.vy +
                bodyi.vz * bodyi.vz);
        for (var j = i + 1; j < size; j++) {
            var bodyj = this.bodies[j];
            dx = bodyi.x - bodyj.x;
            dy = bodyi.y - bodyj.y;
            dz = bodyi.z - bodyj.z;
            distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
            e -= (bodyi.mass * bodyj.mass) / distance;
        }
    }
    return e;
}