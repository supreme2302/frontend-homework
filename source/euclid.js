'use strict';


function nod(lhs, rhs) {
    while (rhs > 0) {
        let x = lhs % rhs;
        lhs = rhs;
        rhs = x;
    }

    return lhs;
}


const euclid = (...data) => data.reduce(function(res, obj) {
    if (res !== undefined && obj > 0)
        return nod(res, obj);
    return undefined;

}, data[0]);
