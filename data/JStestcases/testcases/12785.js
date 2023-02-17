function(values, eps) {
    if (typeof(eps) === 'undefined') eps = 0;
    var sum = 0,
        l = values.length;
    for (var i = 0; i < l; i++)
        sum += values[i] * Math.log(values[i] + eps);
    return -sum;
}