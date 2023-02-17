function([data_arr, barrier_arr]) {
    Atomics.store(barrier_arr, 0, 1);
    for (let nr = 1; nr < 1000; ++nr) {
        for (let idx = 0; idx < data_arr.length; ++idx) {
            data_arr[idx] = nr;
        }
    }
}