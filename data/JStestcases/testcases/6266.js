function(length) {
    let a = new Array(length);
    for (let i = 0; i < length; i++) {
        a[i] = '' + i;
    }
    return Object.freeze(a);
}