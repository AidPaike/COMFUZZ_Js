function(error) {
    if (this.runner.NotifyError) {
        this.runner.NotifyError(this.name, error);
    }
    if (this.runner.NotifyStep) {
        this.runner.NotifyStep(this.name);
    }
}