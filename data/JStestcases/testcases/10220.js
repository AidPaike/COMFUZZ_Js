function() {
    function lazy() {
        async (...a) => {
            const d = 0;
        }

        function skippable() {}
    }
    lazy();
}