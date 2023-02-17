function(obj1, obj2) {
    let result = "";
    for (let prop in obj1) {
        if (obj1.hasOwnProperty(prop)) {
            result += `own: ${prop}, `;
        } else {
            result += `not: ${prop}, `;
        }
        obj2.x = "123";
    }
    return result;
}