function(fileName) {
    var fileNameNoExt = fileName.toLowerCase();
    var indexDot = fileNameNoExt.lastIndexOf('.');
    if (indexDot != -1)
        fileNameNoExt = fileNameNoExt.substr(0, indexDot);
    fileNameNoExt = fileNameNoExt.replace(/\\/g, "/");
    if (fileNameNoExt.length > 0) {
        if (fileNameNoExt.charAt(0) == "/") {
            if (fileNameNoExt.length > 1)
                fileNameNoExt = fileNameNoExt.substr(1, fileNameNoExt.length - 1);
            else
                fileNameNoExt = "";
        }
    }
    return fileNameNoExt;
}