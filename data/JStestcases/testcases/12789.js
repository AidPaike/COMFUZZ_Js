function() {
    eval('this.value = "Seekrit message";');
    return eval('this.value') === "Seekrit message";
}