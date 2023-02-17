function(v, rand) {
    var properties = Object.getOwnPropertyNames(v);
    var proto = Object.getPrototypeOf(v);
    if (proto) {
        properties = properties.concat(Object.getOwnPropertyNames(proto));
    }
    if (properties.includes("constructor") && v.constructor.hasOwnProperty("__proto__")) {
        properties = properties.concat(Object.getOwnPropertyNames(v.constructor.__proto__));
    }
    if (properties.length == 0) {
        return "0";
    }
    return properties[rand % properties.length];
}