function(n, action) {
    var testObj = {
        get propertyWithGetter() {
            if (n == 0)
                return action();
            n--;
            return this.propertyWithGetter;
        }
    };
    return testObj.propertyWithGetter;
}