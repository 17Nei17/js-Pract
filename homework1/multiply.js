function multiply(n,x) {
    var res = 0
    if (x < 0) {
        x = -x
        for (i = 1; i <= x; i++) {
            res += n;
        }
        return (console.log(-res))
    } 
    else {
        for (i = 1; i <= x; i++) {
            res += n;
        }
        return (console.log(res))
    }
}