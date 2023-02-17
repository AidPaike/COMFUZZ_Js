function() {
    "use asm";

    function fib(x) {
        x = x | 0;
        switch (x | 0) {
            case 0:
                return 1;
            case 1:
                return 1;
            case 2:
                return 2;
            case 3:
                return 3;
            case 4:
                return 5;
            case 5:
                return 8;
            case 6:
                return 13;
            case 7:
                return 21;
            case 8:
                return 34;
            case 9:
                return 55;
        }
        return -1;
    }
    return {
        fib: fib
    };
}