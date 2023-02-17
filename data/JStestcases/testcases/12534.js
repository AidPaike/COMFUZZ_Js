function(condition, name, passString, failString) {
    this.heartbeatCallback();
    let diag = this.repr(condition) + " was expected false";
    this.addTest(!condition,
        name,
        typeof(passString) == "undefined" ? this.TEST_KNOWN_FAIL : passString,
        typeof(failString) == "undefined" ? this.TEST_UNEXPECTED_FAIL : failString,
        diag,
        "todo");
}