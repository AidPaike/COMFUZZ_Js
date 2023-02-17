function(obj, lines) {
    for (var p in obj) {
        lines.push("  " + p + ": " + obj[p]);
    }
}