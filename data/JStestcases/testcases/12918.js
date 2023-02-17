function() {
    'use asm';

    function fun() {
        fun();
    }
    return fun;
}