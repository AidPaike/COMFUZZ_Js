function() {
    var x;
    var foo = "for (var z = 0; z < 2; ++z) { new Object(new String(this), x)}";
    foo.replace(/\n/g, " ");
    eval(foo);
}