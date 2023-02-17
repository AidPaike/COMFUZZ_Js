function(arr, index) {
    let s4 = 1000;
    for (var t = 2; t < index; t++) {
        if (t < 5)
            s4 -= 100;
        else
            s4 -= 140;
        arr[s4] = 4;
        s4 += 100;
    }
}