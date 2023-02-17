function(matrix, rowIndices, columnIndices) {
    var rowOut = rowIndices.some(r => {
        return r < 0 || r >= matrix.rows;
    });
    var columnOut = columnIndices.some(c => {
        return c < 0 || c >= matrix.columns;
    });
    if (rowOut || columnOut) {
        throw new RangeError('Indices are out of range');
    }
    if (typeof rowIndices !== 'object' || typeof columnIndices !== 'object') {
        throw new TypeError('Unexpected type for row/column indices');
    }
    if (!Array.isArray(rowIndices)) rowIndices = Array.from(rowIndices);
    if (!Array.isArray(columnIndices)) rowIndices = Array.from(columnIndices);
    return {
        row: rowIndices,
        column: columnIndices
    };
}