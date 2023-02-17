function(producer) {
    Promise.resolve(producer()).catch(() => {});
}