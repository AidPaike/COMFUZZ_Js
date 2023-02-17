function(index) {
    async function aFunction() {
        throw ("Rejection from test " + index);
    }
    aFunction(); //Should notify rejected
}