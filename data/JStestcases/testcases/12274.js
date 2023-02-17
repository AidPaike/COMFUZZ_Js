function(key) {
    if (this.isEmpty()) {
        throw Error('Key not found: ' + key);
    }
    this.splay_(key);
    if (this.root_.key != key) {
        throw Error('Key not found: ' + key);
    }
    var removed = this.root_;
    if (!this.root_.left) {
        this.root_ = this.root_.right;
    } else {
        var right = this.root_.right;
        this.root_ = this.root_.left;
        this.splay_(key);
        this.root_.right = right;
    }
    return removed;
}