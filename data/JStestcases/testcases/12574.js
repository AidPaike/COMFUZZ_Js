function(name, doWarmup, doDeterministic, deterministicIterations,
    run, setup, tearDown, rmsResult, minIterations) {
    this.name = name;
    this.doWarmup = doWarmup;
    this.doDeterministic = doDeterministic;
    this.deterministicIterations = deterministicIterations;
    this.run = run;
    this.Setup = setup ? setup : function() {};
    this.TearDown = tearDown ? tearDown : function() {};
    this.rmsResult = rmsResult ? rmsResult : null;
    this.minIterations = minIterations ? minIterations : 32;
}