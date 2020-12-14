"use strict";
const chapter6_1_4 = () => {
    let a = 'x'; //string type
    let b = 3; //number type
    var c = true; //boolean type
    const d = { x: 3 }; //{x: number} type
    let E;
    (function (E) {
        E[E["X"] = 0] = "X";
        E[E["Y"] = 1] = "Y";
        E[E["Z"] = 2] = "Z";
    })(E || (E = {}));
    let e = E.X; //E type
    const a2 = 'x'; //'x' type
    const b2 = 3; //3 type 
    const c2 = true; //true type
    let E2;
    (function (E2) {
        E2[E2["X"] = 0] = "X";
        E2[E2["Y"] = 1] = "Y";
        E2[E2["Z"] = 2] = "Z";
    })(E2 || (E2 = {}));
    const e2 = E2.X; //E2.X type
    let a3 = 'x'; //'x' type
    let b3 = 3; //3 type
    var c3 = true; //true type
    const d3 = { x: 3 }; //{x:3}
    const a4 = 'x'; //'x' type
    let b4 = a; //string type 拡大されない型をletやvarで再割り当てすると型の拡大が行われる。
    const c4 = 'x'; //'x' type 
    //明示的に型をアノテートしておくと、再割り当て時に型の拡大が行われない
    let d4 = c4; //'x' type
    //nullで初期化された変数は、再割り当て後もanyになる
    let a5 = null; //any type
    a5 = 3; //any type
    a = 'b'; //any type
    function x() {
        let a = null; //any type
        a = 3; //any type
        a = 'b'; //any type
        return a;
    }
    console.log(typeof x()); //string type
};
chapter6_1_4();
//# sourceMappingURL=6.1.4.js.map