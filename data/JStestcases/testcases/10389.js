function() {
    return {
        start: 0,
        end: 6,
        test: function(a) {
            a[5] = 3;
            for (let i = 0; i < 6; i++) {
                a[i] = 0;
            }
        }
    };
}