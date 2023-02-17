function() {
    async function f2a() {
        throw "err";
    }
    async function f2b() {
        try {
            var p = f2a();
        } catch (e) {
            console.log("caught " + e);
        }
    }
    async function f2c() {
        var p = f2a();
    }
    f2b();
    f2c();
}