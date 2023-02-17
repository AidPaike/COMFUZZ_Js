function(d1, d2) {
    return (d1.value === d2.value &&
        d1.enumerable === d2.enumerable &&
        d1.writable === d2.writable &&
        d1.configurable === d2.configurable);
}