function(str) {
    str = str + "";
    if (typeof(str) != "string" || str.length === 0) {
        return null;
    }
    var iso = str.split('-');
    if (iso.length === 0) {
        return null;
    }
    var date = new Date(iso[0], iso[1] - 1, iso[2]);
    date.setFullYear(iso[0]);
    date.setMonth(iso[1] - 1);
    date.setDate(iso[2]);
    return date;
}