function(badJson) {
    try {
        JSON.parse(badJson);
    } catch (e) {}
}