function(a) {
    return new Cons(a);

    function Cons(a) {
        return {
            a: (a << 1) + 2
        };
    }
}