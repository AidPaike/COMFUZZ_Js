function* gen() {
    const alwaysPending = new Promise(() => {});
    alwaysPending.then = "non-callable then";
    yield alwaysPending;
}