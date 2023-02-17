function(noIn, refShorthandDefaultPos) {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    const expr = this.parseMaybeUnary(refShorthandDefaultPos);
    if (refShorthandDefaultPos && refShorthandDefaultPos.start) {
        return expr;
    } else {
        return this.parseExprOp(expr, startPos, startLoc, -1, noIn);
    }
}