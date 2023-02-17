function(arr, arr2) {
    arr[0] = 1.1;
    Math.max.apply(Math, arr2);
    arr[0] = 2.3023e-320;
}