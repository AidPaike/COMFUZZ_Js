function() {
    "use strict";
    if (this.BGPriorityEnabled) {
        this.BGLayerRender = this.BGGBCLayerRender;
        this.WindowLayerRender = this.WindowGBCLayerRender;
    } else {
        this.BGLayerRender = this.BGGBCLayerRenderNoPriorityFlagging;
        this.WindowLayerRender = this.WindowGBCLayerRenderNoPriorityFlagging;
    }
}