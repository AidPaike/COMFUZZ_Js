function(a) {
    try {} catch (_) {}
    return (a | 0) * (a | 0) | 0;
}