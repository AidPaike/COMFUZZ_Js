function(set) {
    let result = "";
    for (let value of set) {
        if (result)
            result += ", ";
        result += value;
    }
    return result;
}