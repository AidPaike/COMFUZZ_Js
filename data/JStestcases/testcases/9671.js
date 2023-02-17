function(eventName) {
    if (this.options[eventName + 'Internal']) {
        this.options[eventName + 'Internal'](this);
    }
    if (this.options[eventName]) {
        this.options[eventName](this);
    }
}