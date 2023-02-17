function(obj) {
    let result = "";
    for (let prop in obj) {
        obj.x = 1;
        if (obj.hasOwnProperty(prop)) {
            result += `own: ${prop}, `;
        } else {
            result += `not: ${prop}, `;
        }
    }
    return result;
}