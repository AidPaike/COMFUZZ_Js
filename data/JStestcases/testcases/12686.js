function(lhs, rhs) {
    if (lhs.constructor.name != 'Array') {
        return (lhs == rhs);
    }
    return (lhs.toSource() == rhs.toSource());
}