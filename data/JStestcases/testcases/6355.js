function(method) {
    const paramCount = method.kind === "get" ? 0 : 1;
    if (method.params.length !== paramCount) {
        const start = method.start;
        if (method.kind === "get") {
            this.raise(start, "getter should have no params");
        } else {
            this.raise(start, "setter should have exactly one param");
        }
    }
}