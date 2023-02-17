function(call, errorType) {
    var success = false;
    try {
        call();
    } catch (e) {
        if (e instanceof errorType) {
            success = true;
        }
    }
    if (!success) {
        throw new Error("Test was meant to throw " + errorType + "but it didn't")
    }
}