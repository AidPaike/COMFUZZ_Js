function() {
    "use asm";

    function caller() {
        do {
            if (1) break;
            return 11;
        } while (0);
        return 12;
    }
    return {
        caller: caller
    };
}