function() {
    for (let i = 0; i < 5000; i++) {
        if (!this.listener.processNext(this)) {
            this.callback();
            this.clear();
            return;
        }
    }
    setTimeout(this.processLog.bind(this), 0);
}