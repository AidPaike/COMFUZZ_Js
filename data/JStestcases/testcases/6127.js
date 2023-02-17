function(prop, propHash) {
    if (prop.computed || prop.kind) return;
    const key = prop.key;
    const name = key.type === "Identifier" ? key.name : String(key.value);
    if (name === "__proto__") {
        if (propHash.proto) this.raise(key.start, "Redefinition of __proto__ property");
        propHash.proto = true;
    }
}