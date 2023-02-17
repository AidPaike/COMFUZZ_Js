function() {
    this.s = 'foobar';
    this.a = 42;

    // Avoid unboxed layout for O1 instances as this will cause the JIT
    // compiler to behave differently and not emit the ObjectGroupDispatch
    // operation (see below).
    delete this.a;
}