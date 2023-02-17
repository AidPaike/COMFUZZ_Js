function() {
    var pass = false;
    return (function() {
        return eval("var pass=true; (function(){ return pass; })");
    })();
}