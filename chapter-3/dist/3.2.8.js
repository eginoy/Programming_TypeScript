"use strict";
const chapter3_2_8 = () => {
    // let a: object = {
    //     b: 'x'
    // }
    // let c = a.b //error object.bを参照しようとしている
    const a = {
        b: 1
    };
    console.log(a.b);
    let e = {
        f: 'x' //{f:string type}
    };
    let g = e.f; //string type
    let h = {
        i: {
            j: 'x'
        }
    };
    let k = h.i.j; //strint type
    let l = {
        m: 1
    };
    let n = {
        firstName: 'john',
        lastName: 'barrowman'
    };
    class Person {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }
    let o = new Person('matt', 'smith');
    let p;
    // p = {} //error propertyが足りない
    // p = {
    //     a:1,
    //     b:2 //error pの型に存在しないpropertyを割り当てようとしたので
    // }
    let q;
    // let r = q * 10 //qは宣言してから割り当てられていないことをtypescriptが教えてくれる
    let s;
    // let r = s * 10 //sはアノテートしていなくても上記同様errorになる 
    let t;
    t = { a: 1 };
    t = { a: 1, b: undefined };
    t = { a: 1, 10: true };
    t = { a: 1, 10: true, 20: false };
    // t = {10: true} //error property aが欠けている
    // t = {a: 1, 33:'red'} //error value に stiring typeを割り当てている
    let u = {
        1: true,
        2: false,
        3: true
    };
    let user = {
        firstName: 'キラキラネーム',
        lastName: '一般的な苗字'
    };
    // user.firstName = '一般的なfirstName' //error firstNameはreadonlyのため再割り当て不可
    user.lastName = 'かっこいい苗字';
    //オブジェクトがどのようなフィールドを持つか重視しない場合にはobjectリテラルを使う。
    //{}（Object）リテラルは避ける
    //空の{}リテラルはnullとundefined以外は割り当て可能なのでなるべく使わない
    let danger;
    danger = {};
    danger = { x: 1 };
    danger = [];
    danger = 2;
    // danger = null //error
    // danger = undefined //error
    //代わりにobjectリテラルを使用するのが望ましい
    let notDanger;
    notDanger = {};
    notDanger = { x: 1 };
    notDanger = [];
    // notDanger = 2 //error
    // notDanger = null //error
    // notDanger = undefined //error
};
//# sourceMappingURL=3.2.8.js.map