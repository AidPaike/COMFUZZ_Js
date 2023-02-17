function() {
    function lazy() {
        async (a = 0) => {
            const d = 0;
        }

        function skippable() {}
    }
    lazy();
}