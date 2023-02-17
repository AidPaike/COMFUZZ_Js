function(operand, op) {
    return "{\n" +
        "    " + operand + " = I;\n" +
        "    let tmp = " + operand + op + op + ";\n" +
        "    if (" + operand + " !== Number(I) " + op + " 1)\n" +
        "        throw Error('" + operand + op + op + " case 1 for '+uneval(I));\n" +
        "    if (tmp !== Number(I))\n" +
        "        throw Error('" + op + op + operand + " case 2 for '+uneval(I));\n" +
        "}\n";
}