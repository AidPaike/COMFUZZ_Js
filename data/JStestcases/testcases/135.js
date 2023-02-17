function() {
    function escapeNullCharacters(s) {
        return (s + '').replace('\0', '\\0');
    }
    var s = String.raw`string literal pre ${'string expression pre \0 string expression post'} string literal post`;
    return escapeNullCharacters(s);
}