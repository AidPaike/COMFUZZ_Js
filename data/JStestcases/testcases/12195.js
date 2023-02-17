function(name) {
    var ascii = '';
    var j;
    var len = name.length;
    for (j = 0; j < len; j++) {
        var my_char = name[j];
        if (my_char == '/')
            my_char = '_';
        ascii += my_char;
    }
    return ascii;
}