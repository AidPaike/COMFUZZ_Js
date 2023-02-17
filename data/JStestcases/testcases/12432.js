function(x, sa) {
    return (x >>> (32 - sa)) | (x << (sa));
}