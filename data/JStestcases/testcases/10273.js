function() {
    return /[\uD800\uDC00\uFFFF]/.test("\uFFFF");
}