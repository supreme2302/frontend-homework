'use strict';


const nod = (lhs, rhs) => {
    while (rhs > 0) {
        const buf = lhs % rhs;
        lhs = rhs;
        rhs = buf;
    }

    return lhs;
}


const euclid = (...data) => data.reduce((result, elem) => (result && elem > 0) ? nod(result, elem) : undefined, data[0]);
