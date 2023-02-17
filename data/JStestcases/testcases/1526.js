function(arr, index) {
    let s4 = 100;
    for (var t = 2; t < index; t++) {
        if (t >= 5)
            s4 -= 60;
        else
            s4 -= 40;
        arr[s4] = 4;
        s4 += 100;
    }
}