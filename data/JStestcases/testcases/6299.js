function(parts) {
    let types = parts.map(part => {
        if (part.type == "literal") {
            return `${part.type}(${part.value})`;
        }
        return part.type;
    });
    return types.join(":");
}