function(object) {
    if (Object.prototype.toString.call(object) == "[object Arguments]")
        return true;
    if (
        !typeof object == "object" ||
        !Object.prototype.hasOwnProperty.call(object, 'callee') ||
        !object.callee ||
        Object.prototype.toString.call(object.callee) !== '[object Function]' ||
        typeof object.length != 'number'
    )
        return false;
    for (var name in object) {
        if (name === 'callee' || name === 'length') return false;
    }
    return true;
}