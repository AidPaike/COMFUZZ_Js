function() {
    "use asm";

    function f(i) {
        i = i | 0;
        switch (i | 0) {
            case 2:
                i = 0x1ffffffff;
                break;
        }
        return i | 0;
    }
    return f;
}