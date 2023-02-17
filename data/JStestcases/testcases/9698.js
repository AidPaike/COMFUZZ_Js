function* foo(x) {
    x ? yield {} : 1;
}