function(err, msg) {
    var pattern = err.name + '\\s*:?\\s*' + msg;
    return err.toString().search(RegExp(pattern));
}