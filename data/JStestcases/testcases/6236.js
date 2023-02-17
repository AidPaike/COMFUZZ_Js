function(iterable) {
    return {
        [Symbol.asyncIterator]() {
            return iterable[Symbol.iterator]();
        }
    };
}