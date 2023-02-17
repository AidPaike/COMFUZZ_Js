function(event) {
    var element = this.findElement(event, 'LI');
    if (this.index != element.autocompleteIndex) {
        this.index = element.autocompleteIndex;
        this.render();
    }
    event.stop();
}