function() {
    var myVar;
    for (myVar = 2;; myVar *= myVar) {
        if (myVar > 100)
            break;
        continue;
    }
    return myVar;
}