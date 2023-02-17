function(arg1, arg2) {
    this.first = arg1;
    var __gunc = Function.call(this, "arg", "return ++arg;");
    __gunc.prop = arg2;
    return __gunc;
}