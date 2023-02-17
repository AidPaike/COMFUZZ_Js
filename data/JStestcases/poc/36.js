function(oTarget, sKey) {
    console.log("get");
    return oTarget[sKey] || 0 || undefined;
}