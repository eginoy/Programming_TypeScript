"use strict";
const chapter4_1 = () => {
    //引数にはアノテートするようにする
    function add(a, b) {
        return a + b;
    }
    //関数の返り値にもアノテートはできるが、推論されるのでしなくても良い(返り値を明示的にわかりやすくしたいときはアノテートする)
    function add2(a, b) {
        return a + b;
    }
    //名前付き関数
    function greet(name) {
        return 'hello' + name;
    }
    //関数式
    let greet2 = function (name) {
        return 'hello' + name;
    };
    //アロー関数式
    let greet3 = (name) => {
        return 'hello' + name;
    };
    //アロー関数式の省略記法
    let greet4 = (name) => 'hello' + name;
    //関数コンストラクター 型安全でないのでこれは使わない
    let greet5 = new Function('name', 'return "hello" + name');
    add(1, 2); //3
    greet('Crystal'); // hello Crystal
    // add(1) //error 引数足りない
    // add(1,'a') //error 第二引数number type に対してstring typeを割り当てている
};
//# sourceMappingURL=4.1.js.map