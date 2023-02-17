function() {
    if (this.varListCount() > 0) {
        this.setInVarBlock(this.varListCount() - 1);
    } else {
        if (this.varListCount() < 0) {
            this.setInVarBlock(this.varListCount() + 1);
        }
    }
}