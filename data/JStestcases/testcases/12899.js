function(v, coll) {
    var determining = v.determinedBy;
    var cc = v.constraints;
    for (var i = 0; i < cc.size(); i++) {
        var c = cc.at(i);
        if (c != determining && c.isSatisfied())
            coll.add(c);
    }
}