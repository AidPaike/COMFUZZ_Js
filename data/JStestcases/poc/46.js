function(oTarget, sKey) {
    if (sKey in oTarget) {
        return false;
    }
    return oTarget.removeItem(sKey);
}