"use strict";
const chapter5_5 = () => {
    class Zebra {
        trot() {
            console.info('ok');
        }
    }
    class Poodle {
        trot() {
            console.info('ok');
        }
    }
    function ambleAround(animal) {
        animal.trot();
    }
    let zebra = new Zebra;
    let poodle = new Poodle;
    ambleAround(zebra); //ok
    //ambleAroundの引数はZebra型でアノテートされているが、TypeScriptはクラスを構造的に型付けするのでエラーにならない。
    //名前での型付けでないので、構造が同じならおk
    ambleAround(poodle); //ok 
    class A {
        constructor() {
            this.x = 1;
        }
    }
    class B extends A {
    }
    class C extends B {
    }
    function f(a) { }
    f(new A);
    f(new B);
    f({ x: 1 }); //error {x: 1}はAまたはBのインスタンスでないのでprivate フィールドに割り当て不可
    f(new C);
};
//# sourceMappingURL=5.5.js.map