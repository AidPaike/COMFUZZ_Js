function(p, message) {
    if (!message) {
        message = 'assert(true)';
    }
    if (p) {
        console.log('PASS');
    } else {
        console.log(`FAIL: ${message}`);
    }
}