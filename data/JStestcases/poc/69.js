function(oTarget, sKey, vValue) {
    if (sKey in oTarget) {
        return false;
    }
    return oTarget.setItem(sKey, vValue);
}