function(res) {
    this.fired = ((res instanceof Error) ? 1 : 0);
    this.results[this.fired] = res;
    this._fire();
}