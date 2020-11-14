"use strict";
//symbolよくわからないのでスキップ
const chpter3_2_7 = () => {
    let a = Symbol('a');
    let b = Symbol('b');
    let c = a === b;
    // let d  = a  + 'x' //error
    //unique symbol
    const e = Symbol('e');
    const f = Symbol('f');
    // let g: unique symbol = Symbol('f') //error
    let h = e === e;
    // let i = e === f //error
};
//# sourceMappingURL=3.2.7.js.map