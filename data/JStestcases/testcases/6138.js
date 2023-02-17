function(pass, msg, failures) {
    this.testIndex += 1;
    if (pass) {
        this.print("ok " + this.testIndex + " - " + msg);
        return;
    }
    this.print("not ok " + this.testIndex + " - " + msg);
    if (failures) {
        for (var i = 0; i < failures.length; i++) {
            this.print("# " + failures[i].join(" "));
        }
    }
}