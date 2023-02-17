function(menu) {
    this.submenu = menu;
    for (var i = 0; i < menu.items.length; i++) {
        menu.items[i].parent = this;
    }
}