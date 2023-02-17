function(a) {
    for (var i = 0; i < a.length; i++) {
        var b = a[i].string;
        var c = a[i].prop;
        this.versionSearchString = a[i].versionSearch || a[i].identity;
        if (b) {
            if (b.indexOf(a[i].subString) != -1)
                return a[i].identity;
        } else if (c)
            return a[i].identity;
    }
}