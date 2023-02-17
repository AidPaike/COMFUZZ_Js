function(request) {
    request.on('response', this.emit.bind(this, 'response'));
    this.stream = this.request = request;
    this.emit('socket', this.socket);
}