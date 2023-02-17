function(array) {
    var inputs = {},
        outputs = {},
        l = array.length,
        index = 0;
    for (var i = 0; i < l; i += 1) {
        if (inputs[array[i]] === undefined) {
            inputs[array[i]] = index;
            outputs[index] = array[i];
            index++;
        }
    }
    return {
        inputs: inputs,
        outputs: outputs
    };
}