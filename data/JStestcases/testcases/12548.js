function(numbers) {
    var log = 0;
    for (var i = 0; i < numbers.length; i++) {
        log += Math.log(numbers[i]);
    }
    return Math.pow(Math.E, log / numbers.length);
}