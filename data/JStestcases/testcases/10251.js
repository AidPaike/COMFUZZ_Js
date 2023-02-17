function() {
    try {
        throw "32.9";
    } catch (e) {
        try {
            var errorCode = /^(\d+)\s+.*$/.exec(e)[1];
        } catch (e2) {
            void("*** internal error: e == " + e + ", e2 == " + e2);
            throw e2;
        }
    }
}