function() {
    if (!this.headersSent) {
        this.writeHead(this.statusCode);
    }
}