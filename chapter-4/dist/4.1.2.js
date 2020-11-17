"use strict";
const chapter4_1_2 = () => {
    function sum(numbers) {
        return numbers.reduce((total, n) => total + n, 0);
    }
    sum([1, 2, 3]); //6
    //argumentsでは引数を取れない
    //!!!関数を呼び出そうとするまでエラーが表示されない
    function sumVariadic() {
        return Array
            .from(arguments)
            .reduce((total, n) => total + n, 0);
    }
    // sumVariadic(1,2,3) //error 引数が指定されていない(0個)のにパラメーターを渡して呼び出そうとしているので
    //レストパラメーター(可変長引数:任意の数の引数を受け取る)
    //可変長引数は関数の中で一つだけしか指定できないのと、最後に指定する必要がある
    function sumVariadicSafe(...numbers) {
        return numbers.reduce((total, n) => total + n, 0);
    }
    sumVariadicSafe(1, 2, 3); //6
};
//# sourceMappingURL=4.1.2.js.map