function() {
    "use asm";

    function caller() {
        if (1) {
            {
                {
                    return 1;
                }
            }
        }
        return 0;
    }
    return {
        caller: caller
    };
}