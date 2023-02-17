function(a, b, always_true = true) {
    a[0] = 1234;
    b[0] = 0;
    let arr = a;
    if (always_true) {
        arr = b;
        for (let i = 0; i < arr.length; i++)
            arr[i] = 0;
    }
    let val = arr[0];
    if (val) {
        return true;
    }
    return false;
}