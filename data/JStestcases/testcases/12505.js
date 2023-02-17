function(args, callback) {
    if (callback) {
        if (!this._emu_cbs) {
            this._emu_cbs = {};
        }
        this._emu_cbs[this._emu_cb_id] = callback;
    }
    this.sendToClient({
        emulator_shell: args,
        id: this._emu_cb_id
    }, -1);
    this._emu_cb_id += 1;
}