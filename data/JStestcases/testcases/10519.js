function(event, tagName) {
    var element = event.target;
    while (element.parentNode && (!element.tagName ||
            (element.tagName.toUpperCase() != tagName.toUpperCase()))) {
        element = element.parentNode;
    }
    return element;
}