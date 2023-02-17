function(obj) {
    let result = "";
    for (let prop in obj) {
        delete obj.x;
        if (obj.hasOwnProperty(prop)) {
            result += `own: ${prop}, `;
        } else {
            result += `not: ${prop}, `;
        }
    }
    return result;
}