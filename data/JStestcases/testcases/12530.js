function() {
    var array = ["XYZ", "mno", "abc", "EFG", "ijk", "123", "tuv", "234", "efg"];
    var sum = 0;
    for (var j = 0; j < array.length; ++j) {
        sum += "fox".localeCompare(array[j]);
    }
    return sum;
}