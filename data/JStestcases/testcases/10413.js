function() {
    var y = 3;
    var x = 4;
    var k = function foo() {
        y = 12;
    }
    k();
    return x;
}