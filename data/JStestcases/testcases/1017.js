function(a, tooth, length) {
    let count = 0;
    while (true) {
        for (let i = 0; i < tooth; ++i) {
            a.push(tooth - i);
            if (++count >= length) return;
        }
    }
}