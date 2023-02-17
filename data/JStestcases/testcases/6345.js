function(re, pat, v1, v2, v3) {
    var s;
    s
    var str = "cdbBdbsbdbdz";
    var arr = re.exec(str);
    s = "first dolar arg contains: " + pat[v1] + "\n";
    s += "second dolar arg contains: " + pat[v2] + "\n";
    s += "third dolar arg contains: " + pat[v3];
    return (s);
}