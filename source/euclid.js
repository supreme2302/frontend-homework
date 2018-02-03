'use strict';


const nod = (lhs, rhs) => {
    while (rhs > 0) {
        const buffer = lhs % rhs;
        lhs = rhs;
        rhs = buffer;
    }

    return lhs;
};


const euclid = (...data) => data.reduce((result, element) =>
    (result && element > 0) ? nod(result, element) : undefined,
    data[0]);
