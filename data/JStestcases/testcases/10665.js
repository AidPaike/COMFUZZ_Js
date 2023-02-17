function(num) {
    num = Number(num);
    if (isNaN(num) || num == 0 || num == Number.POSITIVE_INFINITY || num == Number.NEGATIVE_INFINITY) {
        return 0;
    }
    var sign = (num < 0) ? -1 : 1;
    num = sign * Math.floor(Math.abs(num));
    num = num % Math.pow(2, 16);
    num = (num > -65536 && num < 0) ? 65536 + num : num;
    return num;
}