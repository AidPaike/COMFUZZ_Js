function(args) {
    return args.map(arg => {
        if (Object.is(arg, -0))
            return {
                unserializableValue: '-0'
            };
        if (Object.is(arg, NaN) || Object.is(arg, Infinity) || Object.is(arg, -Infinity))
            return {
                unserializableValue: arg + ''
            };
        if (typeof arg === 'bigint')
            return {
                unserializableValue: arg + 'n'
            };
        if (arg && arg.objectId)
            return {
                objectId: arg.objectId
            };
        return {
            value: arg
        };
    });
}