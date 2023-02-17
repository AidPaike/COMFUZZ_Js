function() {
    return (async () => {
        [...await arguments]
    })();
}