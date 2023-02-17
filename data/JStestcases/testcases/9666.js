function(obj) {
    var str = "";
    for (var i = 0; i < obj.length; i++)
        str += obj[i] + ",";
    return str + ":: Length: " + obj.length;
}