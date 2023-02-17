function(mode, element) {
    if (!mode) {
        return 0;
    }
    if (mode == 'vertical') {
        return ((this.offset.y + element.offsetHeight) - this.ycomp) /
            element.offsetHeight;
    }
    if (mode == 'horizontal') {
        return ((this.offset.x + element.offsetWidth) - this.xcomp) /
            element.offsetWidth;
    }
}