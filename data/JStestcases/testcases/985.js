function() {
    if (this.left == null) return this.item;
    else return this.item + this.left.itemCheck() - this.right.itemCheck();
}