function(list, cons, ...args) {
    let result = new cons(list.length, ...args);
    list.push(result);
    return result;
}