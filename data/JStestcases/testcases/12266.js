function(e, color, bgColor) {
    if (this.options.border) {
        this._renderBorder(e, bgColor);
    }
    if (this._isTopRounded()) {
        this._roundTopCorners(e, color, bgColor);
    }
    if (this._isBottomRounded()) {
        this._roundBottomCorners(e, color, bgColor);
    }
}