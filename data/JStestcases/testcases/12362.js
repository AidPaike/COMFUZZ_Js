function(op, num_ops) {
    let str = "(function(init";
    for (let i = 0; i < num_ops; i++) {
        str += ",a" + i;
    }
    str += "){ var tmp=init; ";
    for (let i = 0; i < num_ops; i++) {
        str += "tmp=(tmp" + op + "a" + i + ");";
    }
    str += "return tmp;})";
    return eval(str);
}