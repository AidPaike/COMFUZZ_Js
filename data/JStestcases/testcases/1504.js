function() {
    String.prototype.startsWith.call({
        "toString": function() {
            return "abc";
        }
    }, /./);
}