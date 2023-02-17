function() {
    if (this._relatedTarget !== null) {
        return this._relatedTarget;
    }
    var elem = null;
    if (this.type() == 'mouseover' || this.type() == 'mouseenter') {
        elem = (this._event.relatedTarget ||
            this._event.fromElement);
    } else if (this.type() == 'mouseout' || this.type() == 'mouseleave') {
        elem = (this._event.relatedTarget ||
            this._event.toElement);
    }
    try {
        if (elem !== null && elem.nodeType !== null) {
            this._relatedTarget = elem;
            return elem;
        }
    } catch (ignore) {}
    return undefined;
}