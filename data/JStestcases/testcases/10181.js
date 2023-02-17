function() {
    "use asm";

    function caller() {
        if (!0) {
            return 44;
        } else {
            return 55;
        }
        return 0;
    }
    return {
        caller: caller
    };
}