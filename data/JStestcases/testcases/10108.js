function() {
    var nextCount = 3;
    return {
        next: function() {
            nextCount += 1;
            return {
                done: nextCount === 6,
                value: nextCount
            };
        }
    };
}