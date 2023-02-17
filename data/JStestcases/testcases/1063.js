function(type, name) {
    switch (type) {
        case "i32":
            return `${name}|0`;
        case "f32":
            return `fr(${name})`;
        case "f64":
            return `+${name}`;
        default:
            throw new Error("Invalid Type");
    }
}