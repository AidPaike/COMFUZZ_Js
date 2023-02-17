function(stdlib) {
    'use asm';

    function empty() {}

    function changeType() {
        return empty() | 0;
    }
    return {
        empty: empty
    };
}