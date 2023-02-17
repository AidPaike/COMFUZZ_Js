function() {
    var a = 0;
    a; /**bp:locals()**/
    let b = 1;
    const cConst = 2;
    a; /**bp:locals()**/ {
        a; /**bp:locals()**/
        const dConst = 3;
        let e = 4;
        dConst;
        e;
        b; /**bp:locals()**/
    }
    return 0; /**bp:locals()**/
}