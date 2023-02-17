function(resolve) {
    resolve("hello");
    throw Error("foo");
}