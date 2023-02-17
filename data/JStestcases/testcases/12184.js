function() {
    let p = new Proxy(Object, {});
    for (let i = 0; i < 20000; ++i) {
        p = new Proxy(p, {});
    }
    try {
        let a = new p();
    } catch (e) {}
}