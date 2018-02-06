'use strict';
const chess = n => {
    if (n == 1) {
        return null;
    }
    let str = '';

    //берем половину,  т.к. выводим по две строки сразу
    const half_size  = Math.floor(n / 2);

    //формируем строку, по образцу которой будут составляться другие
    //половина, т.к. используем сразу 2 символа
    const pattern = '* '.repeat(Math.floor(n / 2) + 1 );

    //формируем четную и нечетную строки
    const even = pattern.substr(0, n);
    const uneven = pattern.substr(1, n);

    for (let i = 0; i < half_size; i++) {
        str += even;
        str += '\n';
        str += uneven;
        str += '\n';
    }

    //если имеем нечетное кол-во строк, то дописываем еще одну
    if ((n % 2) === 1) {
        str += even;
        str += '\n';
    }
    return str;
};

//console.log(chess(5));





