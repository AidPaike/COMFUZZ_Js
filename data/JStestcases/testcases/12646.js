function(arr, len) {
    var obj = {
        done: true,
        value: undefined
    };
    if (len > 5) {
        return obj;
    }
    return {
        done: false,
        value: arr[len]
    };
}