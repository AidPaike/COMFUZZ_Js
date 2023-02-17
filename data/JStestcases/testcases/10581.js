function(keyword) {
    try {
        var o = {};
        eval("o." + keyword + " = 17;\n" +
            "if (o['" + keyword + "'] != 17)\n" +
            "throw \"'o." + keyword + " = 17' failed!\";");
    } catch (e) {
        throw e;
    }
}