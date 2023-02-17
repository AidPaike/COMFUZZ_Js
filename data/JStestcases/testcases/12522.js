function(index) {
    async function aFunction() {
        throw ("Rejection from test " + index);
    }
    aFunction().catch(() => {}); //Should notify rejected AND then handled
}