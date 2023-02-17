function(reg, str, expected, msg) {
    if (reg.unicode) {
        ("Testing with unicode flag.").echo();
    }
    var result = reg.exec(str);
    if (JSON.stringify(result[0]) !== JSON.stringify(expected)) {
        ("Failed: " + msg).echo();
        ("Regex: " + reg.toString()).echo();
        ("Result in CodePoint Values: " + result[0].getCP()).echo();
        ("Expected in CodePoint Values: " + expected.getCP()).echo();
    } else {
        ("Passed: " + msg).echo();
    }
}