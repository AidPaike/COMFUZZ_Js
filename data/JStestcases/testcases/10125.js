function() {
    return this.state.type.keyword === "var" ||
        this.state.type.keyword === "const" ||
        this.state.type.keyword === "let" ||
        this.state.type.keyword === "function" ||
        this.state.type.keyword === "class" ||
        this.isContextual("async");
}