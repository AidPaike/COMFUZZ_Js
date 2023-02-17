function(op, name) {
    var code = (
        "global." + name + "_part1 = 4;\n" +
        "try {\n" +
        "  (" + name + "_part1 = 1) " + op + " throwex();\n" +
        "}\n" +
        "catch (e) {\n" +
        "}\n" +
        "shouldBe('" + name + "_part1', '1');\n" +
        "global." + name + "_part2 = 4;\n" +
        "try {\n" +
        "  throwex() " + op + " (" + name + "_part2 = 1);\n" +
        "}\n" +
        "catch (e) {\n" +
        "}\n" +
        "shouldBe('" + name + "_part2', '4');\n");
    eval(code);
}