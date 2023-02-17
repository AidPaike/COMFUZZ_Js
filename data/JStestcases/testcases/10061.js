function() {
    new Function("function() {}; `z`;")();
    new Function("function z() {}; `${z}`;")();
    new Function("function z() {}; `${z}${z}`;")();
    new Function("function z() {}; `${z}${z}${z}`;")();
    new Function("function z() {}; `${'z'}${z}${z}`;")();
    new Function("function z() {}; `${'z'}${'z'}${z}`;")();
    new Function("function z() {}; '' + z + '';")();
    new Function("function z() {}; z`${`${z}`}`;")();
    new Function("function z() {}; z``;")();
    new Function("function z() {}; ``;")();
    new Function("(`${function(id) { return id }}`);")();
    new Function("function y() {} y`${`${'z'}${`${function(id) { return id }})${ /x/g >= 'c'}`}`}`;")();
}