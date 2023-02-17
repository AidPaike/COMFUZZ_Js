function([buf]) {
    const arr = new Int32Array(buf);
    for (let val = 1; val < 100; ++val) arr.fill(val);
}