function() {
    const a = 1;
    let b = 2;
    a; /**bp:evaluate('a++');evaluate('a')**/
    b; /**bp:evaluate('b++');evaluate('b')**/
}