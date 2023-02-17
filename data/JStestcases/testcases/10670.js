function(s) {
    var m = {
        '\b': '\\b',
        '\t': '\\t',
        '\n': '\\n',
        '\f': '\\f',
        '\r': '\\r',
        '"': '\\"',
        '\\': '\\\\'
    };
    s.parseJSON = function(filter) {
        var j;

        function walk(k, v) {
            var i, n;
            if (v && typeof v === 'object') {
                for (i in v) {
                    if (Object.prototype.hasOwnProperty.apply(v, [i])) {
                        n = walk(i, v[i]);
                        if (n !== undefined) {
                            v[i] = n;
                        }
                    }
                }
            }
            return filter(k, v);
        }
        if (/^[\],:{}\s]*$/.test(this.replace(/\\./g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(:?[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
            j = eval('(' + this + ')');
            return typeof filter === 'function' ? walk('', j) : j;
        }
        throw new SyntaxError('parseJSON');
    };
    s.toJSONString = function() {
        if (/["\\\x00-\x1f]/.test(this)) {
            return '"' + this.replace(/[\x00-\x1f\"]/g, function(a) {
                var c = m[a];
                if (c) {
                    return c;
                }
                c = a.charCodeAt();
                return '\\u00' + Math.floor(c / 16).toString(16) +
                    (c % 16).toString(16);
            }) + '"';
        }
        return '"' + this + '"';
    };
}