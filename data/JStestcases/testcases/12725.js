function() {
    function inner() {}
    inner.__proto__ = {
        b: 'b'
    }; // Put enumerable property into prototype chain
    new inner(); // Populate ctor cache
    for (var s in inner) { // Cache 'prototype' in TypePropertyCache while enumerating
        inner[s];
    }
    inner.prototype = {
        sox: 'red'
    }; // Set new prototype, using inline cache on 2nd invocation
    return new inner(); // On 2nd invocation, try to construct using stale ctor cache
}