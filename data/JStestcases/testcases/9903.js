function(resolve, reject) {
    try { // This try-catch must not prevent this uncaught reject event.
        reject(new Error("uncaught")); // event
    } catch (e) {}
}