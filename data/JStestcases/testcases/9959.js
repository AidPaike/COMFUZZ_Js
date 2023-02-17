function() {
    JSON.parse('12\t\r\n 34'); // should produce a syntax error as whitespace results in two tokens
}