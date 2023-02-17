function(a) {
    var i, s = "",
        tab, v;
    tab = new Uint8Array(a);
    for (i = 0; i < tab.length; i++) {
        v = tab[i].toString(16);
        if (v.length < 2)
            v = "0" + v;
        if (i !== 0)
            s += " ";
        s += v;
    }
    return s;
}