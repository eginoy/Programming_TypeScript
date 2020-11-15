"use strict";
const chapter3_2_10 = () => {
    let a = [1, 2, 3]; //number[] type
    var b = ['a', 'b']; //string[] type
    let c = ['a']; //string[] type
    let d = [1, 'a']; //(number | string)[] type
    const e = [2, 'b']; //(number | string)[] type
    let f = ['red']; //string[] type
    f.push('blue');
    // f.push(true) //error
    let g = []; //any[] type
    g.push(1);
    g.push('red');
    let h = []; //number[] type
    // let h: Array<number> = [] //こっちでもおｋ
    h.push(1);
    // h.push('red') //error
    let i = [1, 'a'];
    i.map(_ => {
        if (typeof _ === 'string') {
            return _.toUpperCase();
        }
        else {
            return _ * 3;
        }
    });
    function buildArray() {
        let a = []; // any[] type
        a.push(1); // number[] type
        a.push('x'); // (number | string )[] type
        return a; //ここでaのtypeは(number | string )[]に確定する
    }
    let myArray = buildArray();
    // myArray.push(true) //error myArrayのtypeは(number | string )[]
};
//# sourceMappingURL=3.2.10.js.map