function(expression) {
    this.params = {
        classNames: [],
        pseudoClassNames: []
    };
    this.expression = expression.toString().replace(/(^\s+|\s+$)/g, '');
    this.parseExpression();
    this.compileMatcher();
}