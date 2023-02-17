function() {
    var x = "bp A";
    x; /**bp(A):evaluate('x');enableBp('B');deleteBp('D');**/
    x = "Hit loc B";
    x; /**loc(B):evaluate('x');disableBp('C');**/
    x = "bp C, BUG";
    x; /**bp(C):evaluate('x');**/
    x = "bp D, BUG";
    x; /**bp(D):evaluate('x');**/
    x = "bp D";
    x; /**bp:evaluate('x');**/
}