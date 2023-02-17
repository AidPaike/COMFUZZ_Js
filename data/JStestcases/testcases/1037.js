function() {
    var nextCount = 0;
    return {
        next: function() {
            nextCount += 1;
            return {
                done: nextCount === 3,
                value: nextCount
            };
        }
    };
}