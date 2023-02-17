function(use) {
    return "(new class c { set a(x) { " + use + " } }).a = 0;";
}