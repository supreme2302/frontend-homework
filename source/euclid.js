'use strict';


const nod = (lhs, rhs) => {
    while (rhs > 0) {
        const x = lhs % rhs;
        lhs = rhs;
        rhs = x;
    }

    return lhs;
}


const euclid = (...data) => data.reduce((res, obj) => (res && obj > 0) ? nod(res, obj) : undefined, data[0]);
