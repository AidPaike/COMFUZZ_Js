function(pixels) {
    var s = '<canvas id="renderCanvas" width="30px" height="30px"></canvas><scr' + 'ipt>\nvar pixels = [';
    var size = 30;
    for (var y = 0; y < size; y++) {
        s += "[";
        for (var x = 0; x < size; x++) {
            s += "[" + pixels[y][x] + "],";
        }
        s += "],";
    }
    s += '];\n    var canvas = document.getElementById("renderCanvas").getContext("2d");\n\
\n\
\n\
    var size = 30;\n\
    canvas.fillStyle = "red";\n\
    canvas.fillRect(0, 0, size, size);\n\
    canvas.scale(1, -1);\n\
    canvas.translate(0, -size);\n\
\n\
    if (!canvas.setFillColor)\n\
        canvas.setFillColor = function(r, g, b, a) {\n\
            this.fillStyle = "rgb("+[Math.floor(r * 255), Math.floor(g * 255), Math.floor(b * 255)]+")";\n\
    }\n\
\n\
for (var y = 0; y < size; y++) {\n\
  for (var x = 0; x < size; x++) {\n\
    var l = pixels[y][x];\n\
    canvas.setFillColor(l[0], l[1], l[2], 1);\n\
    canvas.fillRect(x, y, 1, 1);\n\
  }\n\
}</scr' + 'ipt>';
    return s;
}