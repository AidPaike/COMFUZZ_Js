function(callSiteObj, sub1, sub2, sub3, sub4) {
    var str = '';
    for (var i in callSiteObj.raw) {
        str += callSiteObj.raw[i];
        if (i == 0 && sub1) {
            str += sub1;
        } else if (i == 1 && sub2) {
            str += sub2;
        } else if (i == 2 && sub3) {
            str += sub3;
        } else if (i == 3 && sub4) {
            str += sub4;
        }
    }
    return str;
}