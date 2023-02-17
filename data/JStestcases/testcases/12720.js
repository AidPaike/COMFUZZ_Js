function(val, deopt, counter) {
    deopt.deopt;
    this.x = val;
    counter.value++;
    return "not an object";
}