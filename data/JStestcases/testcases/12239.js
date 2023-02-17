function(el, corx, cory, touchId) {
    let doc = el.ownerDocument;
    let win = doc.defaultView;
    let clientX = corx;
    let clientY = cory;
    let pageX = clientX + win.pageXOffset,
        pageY = clientY + win.pageYOffset;
    let screenX = clientX + win.mozInnerScreenX,
        screenY = clientY + win.mozInnerScreenY;
    let atouch = doc.createTouch(win, el, touchId, pageX, pageY, screenX, screenY, clientX, clientY);
    return atouch;
}