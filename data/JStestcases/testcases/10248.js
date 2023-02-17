function() {
    var obj = {};
    Function("a1,a2,a3", "this.shifted=a1+a2.length+a3;").call(obj, "", arguments, 2);
    return obj;
}