function(oTarget, sKey) {
    var vValue = oTarget.getItem(sKey);
    return vValue ? {
        value: vValue,
        writable: true,
        enumerable: true,
        configurable: false
    } : undefined;
}