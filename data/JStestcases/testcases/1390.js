function() {
    var was_del = false;
    for (var i = 0; i < arguments.length; i++)
        was_del = was_del || delete arguments[i];
    return was_del;
}