function() {
    for (let i = 0; i < 0x10; i++)
        new ArrayBuffer(0x1000000);
}