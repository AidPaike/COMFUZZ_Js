function(a) {
    var x = a; /**bp(oneshot):stack();disableBp('oneshot')**/ // fires and disables itself
    var y = a + a; /**bp(neverhit):log('ERROR: should never fire')**/ // should never fire
    x += y; /**bp(foo):stack();locals()**/
    x--; /**bp(bar):disableBp('foo');**/ // disables breakpoint 'foo'
}