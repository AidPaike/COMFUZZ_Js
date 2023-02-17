function() {
    let bailout = (a = function() {}, b = eval('')) => {}
    bailout();

    function not_skippable() {}
}