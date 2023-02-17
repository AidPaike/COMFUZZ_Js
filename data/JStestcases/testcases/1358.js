function(key, unit, default_) {
    const exceptions = {
        "year": {
            "-1": "last year",
            "0": "this year",
            "1": "next year",
        },
        "quarter": {
            "-1": "last quarter",
            "0": "this quarter",
            "1": "next quarter",
        },
        "month": {
            "-1": "last month",
            "0": "this month",
            "1": "next month",
        },
        "week": {
            "-1": "last week",
            "0": "this week",
            "1": "next week",
        },
        "day": {
            "-1": "yesterday",
            "0": "today",
            "1": "tomorrow",
        },
        "hour": {
            "0": "this hour",
        },
        "minute": {
            "0": "this minute",
        },
        "second": {
            "0": "now",
        },
    };
    const exception = exceptions[unit] || {};
    if (key in exception) {
        return [{
            "type": "literal",
            "value": exception[key]
        }, ]
    }
    return default_;
}