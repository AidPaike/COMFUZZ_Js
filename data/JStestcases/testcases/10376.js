function() {
    return (async () => {
        return JSON.stringify([...await arguments])
    })();
}