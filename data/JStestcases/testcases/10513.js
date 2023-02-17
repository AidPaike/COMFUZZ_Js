function(retVal) {
    var ObjectV = function ObjectV(v) {}
    ObjectV.prototype = {
        valueOf: function() {
            return retVal;
        }
    };

    function f() {
        var x = new ObjectV(0);
        x < "1";
    }
    f();
    f();
    f();
}