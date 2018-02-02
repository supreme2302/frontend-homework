'use strict';


function nod(a, b) {
    while (b > 0) {
        var x = a % b;
        a = b;
        b = x;
    }

    return a;
}


function euclid() {
    if (arguments.length === 0)
        return NaN;

    var result = arguments[0];

    for (var i = 1; i < arguments.length; i++) {
        if (arguments[i] <= 0)
            return NaN;

        result = nod(result, arguments[i]);
    }

    return result;
}
