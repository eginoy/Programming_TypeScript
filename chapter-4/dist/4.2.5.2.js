"use strict";
const chapter4_2_5_2 = () => {
    function call(f, ...args) {
        return f(...args);
    }
    function fill(lentgh, value) {
        return Array.from({ length }, () => value);
    }
    // call(fill,10,'a')//10個の'a'が入った配列
    function call2(f, ...args) {
        return f(...args);
    }
    let a = call2(fill, 10, 'a');
    // let b = call2(fill,10) //error fill関数に渡す引数が不足している
    // let c = call2(fill,10,'a','b') //error fill関数に渡す引数が多い
};
//# sourceMappingURL=4.2.5.2.js.map