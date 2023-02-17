function() {
    let a1 = "level1";
    try {
        throw "level2";
    } catch (e) {
        let a1 = "level2";
        eval("var b1 = 'level3'"); /**bp:evaluate('a1');**/
        try {
            throw "level3";
        } catch (e1) {
            a1 += "level3";
        }
    }
}