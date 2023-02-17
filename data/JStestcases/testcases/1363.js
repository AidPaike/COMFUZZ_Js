function() {
    this.open = function(type, url, some_bool) {
        this.url = url;
    }
    this.overrideMimeType = function() {}
    this.send = function() {
        this.response = null;
        this.readyState = 4;
        this.status = 0;
        this.onreadystatechange();
    }
}