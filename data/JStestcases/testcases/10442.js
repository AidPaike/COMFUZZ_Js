function() {
    var endModulus = this.CPUCyclesTotalCurrent % 4;
    this.CPUCyclesTotal = this.CPUCyclesTotalBase + this.CPUCyclesTotalCurrent - endModulus;
    this.CPUCyclesTotalCurrent = endModulus;
}