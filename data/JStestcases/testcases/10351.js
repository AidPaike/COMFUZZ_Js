function() {
    var y = 3;
    var x = 4;
    var k = function foo() {
        y = x;
    }
    k();
    x = 9;
    return x;
}