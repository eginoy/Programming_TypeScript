"use strict";
const chapter4_5 = () => {
    let reserve = (fromOrDestination, toOrDestination, destination) => {
        let reservation;
        if (toOrDestination instanceof Date && fromOrDestination instanceof Date && destination !== undefined) {
            reservation = {
                from: fromOrDestination,
                to: new Date(),
                destination: destination
            };
        }
        else if (typeof toOrDestination === 'string' && fromOrDestination instanceof Date) {
            reservation = {
                from: fromOrDestination,
                destination: toOrDestination
            };
        }
        else if (typeof fromOrDestination === 'string') {
            reservation = { destination: destination };
        }
        return reservation;
    };
    console.log(reserve);
    //練習問題4
    //渡された関数の第二引数がstring typeであることを制限するcallを定義する。(第二引数がstringでないときにコンパイルエラー)
    function call(f, ...args) {
        return f(...args);
    }
    function fill(length, value) {
        return Array.from({ length }, () => value);
    }
    call(fill, 10, 'a');
    //練習問題5
    //is関数を定義する。(下記のように使える関数)
    console.log(is('string', 'otherstring')); //false
    console.log(is(true, false)); //false
    console.log(is(42, 42)); //true
    // console.log(is(10,'foo')) //異なる型を渡すとerror
    //任意の数も渡せるように
    console.log(is(1, 1, 1)); //true
    console.log(is(1, 2, 3)); //false
    function is(a, ...b) {
        return b.every(_ => _ === a);
    }
};
chapter4_5();
//# sourceMappingURL=4.5.js.map