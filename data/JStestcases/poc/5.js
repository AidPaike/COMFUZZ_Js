function(oTarget, sKey, oDesc) {
    if (oDesc && "value" in oDesc) {
        oTarget.setItem(sKey, oDesc.value);
    }
    return oTarget;
}