function(state) {
    let value = state.stringValues.get(this.name);
    if (value == null)
        state.abort("Could not find string variable " + this.name);
    return value;
}