function(path) {
    var content = '<!doctype html>' +
        '<html>' +
        '<head><title>HOORAY!</title></head>' +
        '<body>You Win! (by requesting' + path + ')</body>' +
        '</html>';
    return content;
}