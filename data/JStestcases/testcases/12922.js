function(aWindow) {
    aWindow.addEventListener("load", function onLoad() {
        aWindow.removeEventListener("load", onLoad);
        if (aWindow.document.getElementById("safeModeDialog")) {
            aWindow.setTimeout(() => {
                aWindow.document.documentElement.getButton("accept").click();
            });
        }
    });
}