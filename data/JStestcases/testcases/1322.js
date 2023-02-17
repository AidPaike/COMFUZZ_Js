function(type, arg) {
    let [url, appId, isInBrowserElement, isSystem] = this._getInfoFromPermissionArg(arg);
    if (isSystem) {
        return; // nothing to do
    }
    var msg = {
        'op': 'remove',
        'type': type,
        'url': url,
        'appId': appId,
        'isInBrowserElement': isInBrowserElement
    };
    this._sendSyncMessage('SPPermissionManager', msg);
}