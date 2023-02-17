function() {
    "use strict";
    eval('this.value = "Seekrit message";');
    return eval('this.value') === undefined;
}