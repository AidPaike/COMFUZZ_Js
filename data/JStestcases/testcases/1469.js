function(global, env, buffer) {
    "use asm";
    var i8 = new global.Int8Array(buffer);

    function foo() {
        i8[0] += 4294967295;
    }
    return {
        foo: foo
    };
}