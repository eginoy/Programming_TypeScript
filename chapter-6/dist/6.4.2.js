"use strict";
const chapter6_4_2 = () => {
    //stringが渡されたかを判定する関数
    function isString(value) {
        return typeof value === 'string';
    }
    isString('a'); //true
    isString([7]); //false
    /*
    isString関数を使用した関数
    isString関数内のtypeofでstring型への絞り込みを行っているが、
    スコープを外れると型の絞り込みが失われてしまう
    isStringは単にbooleanを返す関数として扱われる
    */
    function parseInput(input) {
        let formattedInput;
        if (isString(input)) {
            formattedInput = input.toUpperCase(); //error inputが上のisString関数でstring型での絞り込みが効いていない
        }
    }
    /*
    ユーザー定義型ガード
    is演算子で自身のパラメーターを絞り込むことで、この関数（isString2）を使用した時に
    型の絞り込みが引き継がれる
    */
    function isString2(value) {
        return typeof value === 'string';
    }
    function parseInput2(input) {
        let formattedInput;
        if (isString2(input)) {
            return formattedInput = input.toUpperCase();
        }
    }
    function isLegacyDialog(dialog) {
        return typeof dialog.value === 'string';
    }
};
//# sourceMappingURL=6.4.2.js.map