function(numbers, percentile) {
    numbers = numbers.slice();
    numbers.sort(function(a, b) {
        return a - b;
    });
    var numbersWeWant = [];
    var originalLength = numbers.length;
    while (numbers.length / originalLength > percentile / 100)
        numbersWeWant.push(numbers.pop());
    var sum = 0;
    for (var i = 0; i < numbersWeWant.length; ++i)
        sum += numbersWeWant[i];
    var result = sum / numbersWeWant.length;
    if (numbers.length && result < numbers[numbers.length - 1]) {
        throw "Sanity check fail: the worst case result is " + result +
            " but we didn't take into account " + numbers;
    }
    return result;
}