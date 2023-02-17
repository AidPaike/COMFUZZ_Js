function(count) {
    let result = "";
    for (let i = 0; i < count; i++) {
        result += "this.p" + i + " = undefined;";
    }
    return result;
}