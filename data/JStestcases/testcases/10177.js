function() {
    var code = 'return (!element.tagName) ? false : ' +
        this.buildMatchExpression() + ';';
    this.match = new Function('element', code);
}