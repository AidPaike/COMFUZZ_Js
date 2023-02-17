function(cond) {
    fail1: while (cond) {
        fail2: while (cond) {
            continue fail2;
        }
    }
}