function(det) {
    this.is_kick = ((det.detection[0] && det.detection[1]) || (det.ma_freq_range[0] / det.maa_freq_range[0]) > 1.4);
}