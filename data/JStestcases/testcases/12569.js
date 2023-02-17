function(o, al, comp) {
    while (al != null) {
        if (comp(al.car.car, o))
            return al.car;
        al = al.cdr;
    }
    return false;
}