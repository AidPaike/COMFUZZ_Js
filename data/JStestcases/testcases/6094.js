function(arr, index) {
    let s4 = 0;
    for (var t = 2; t < index; t++) {
        if (t >= 5)
            s4 += 32;
        else
            s4 += 66;
        arr[s4] = 4;
    }
}