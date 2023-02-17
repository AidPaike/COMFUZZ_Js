function() {
    Function.prototype.apply = () => console.error('Should never call this');
    console.assert(true);
    console.assert(false);
    console.assert(false, 1);
    console.assert(false, 1, 2);
    console.assert();
    return console.assert;
}