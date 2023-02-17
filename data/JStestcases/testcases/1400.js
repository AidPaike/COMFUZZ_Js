function(obj, func) {
    let save = Object.getPrototypeOf(obj);
    func();
    Object.setPrototypeOf(obj, save);
}