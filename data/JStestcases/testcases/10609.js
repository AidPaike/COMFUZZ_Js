function(value) {
    if (value >= 0) return value;
    return 4294967296 + value;
}