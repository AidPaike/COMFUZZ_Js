function(target, source) {
    let didAdd = false;
    for (let value of source) {
        if (target.has(value))
            continue;
        target.add(value);
        didAdd = true;
    }
    return didAdd;
}