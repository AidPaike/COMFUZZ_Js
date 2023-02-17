function(el, n, _54f) {
    var _550 = this._marginSize(n) + "px";
    var _551 = (_54f == "top" ? this._whichSideTop() : this._whichSideBottom());
    var _552 = el.style;
    if (_551 == "left") {
        _552.marginLeft = _550;
        _552.marginRight = "0px";
    } else {
        if (_551 == "right") {
            _552.marginRight = _550;
            _552.marginLeft = "0px";
        } else {
            _552.marginLeft = _550;
            _552.marginRight = _550;
        }
    }
}