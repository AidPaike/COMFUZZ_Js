function(cb, eb) {
    if (this.chained) {
        throw new Error("Chained Deferreds can not be re-used");
    }
    this.chain.push([cb, eb]);
    if (this.fired >= 0) {
        this._fire();
    }
    return this;
}