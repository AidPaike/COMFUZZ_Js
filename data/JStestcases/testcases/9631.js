function(object) {
    if (object.prototype.hasOwnProperty('toString')) {
        throw new Error(`${object.name}.prototype should not have own property 'toString'`);
    }
    if (object.prototype.toString !== Error.prototype.toString) {
        throw new Error(`${object.name}.prototype.toString should === Error.prototype.toString`);
    }
}