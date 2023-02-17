function(aPrefName, aPrefType, aIid) {
    var msg = {};
    if (aIid) {
        msg = {
            'op': 'get',
            'prefName': aPrefName,
            'prefType': aPrefType,
            'prefValue': [aIid]
        };
    } else {
        msg = {
            'op': 'get',
            'prefName': aPrefName,
            'prefType': aPrefType
        };
    }
    var val = this._sendSyncMessage('SPPrefService', msg);
    if (val == null || val[0] == null)
        throw "Error getting pref";
    return val[0];
}