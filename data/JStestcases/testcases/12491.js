function() {
    let z = 1;
    try {
        throw new Error();
    } catch (e) {
        let x = 1;
        x;
        /**loc(bp1):
                   locals(1);
                   resume('step_out')
                   **/
    }
    z++;
}