function() {
    Array.from([1, 2]).map(() => 1).filter(() => true);

    function nested1() {
        Array.from([1, 2]).map(() => 1).filter(() => true);
    }

    function nested2() {
        Array.from([1, 2]).map(() => 1).filter(() => true);
    }
    nested1();
    nested2();
}