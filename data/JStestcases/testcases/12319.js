function* callArguments() {
    while (true) {
        yield {
            value: -12345,
            i32: "-12345",
            f32: `fr(${Math.fround(-12345)})`,
            f64: "-12345.0"
        };
        yield {
            value: Math.PI,
            i32: `${Math.PI|0}`,
            f32: `fr(${Math.fround(Math.PI)})`,
            f64: `+${Math.PI}`
        };
    }
}