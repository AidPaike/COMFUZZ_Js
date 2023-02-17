function() {
    let a = 1;
    let b = 2;
    let c = 3;
    () => a + c; // a and c are context-allocated
    return function g() {
        let a = 2; // a is stack-allocated
        return function h() {
            b; // b is allocated onto f's context.
            debugger;
        }
    }
}