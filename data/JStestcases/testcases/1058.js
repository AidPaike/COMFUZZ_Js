function(m, isPrime) {
    var i, k, count;
    for (i = 2; i <= m; i++) {
        isPrime[i] = true;
    }
    count = 0;
    for (i = 2; i <= m; i++) {
        if (isPrime[i]) {
            for (k = i + i; k <= m; k += i) isPrime[k] = false;
            count++;
        }
    }
    return count;
}