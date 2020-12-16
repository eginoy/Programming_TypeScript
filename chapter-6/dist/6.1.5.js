"use strict";
const chapter6_1_5 = () => {
    //単位の列挙
    let units = ['cm', 'px', '%'];
    //各単位をチェックし、一致するものがなければnullを返す
    function parseUnit(value) {
        for (let i = 0; i < units.length; i++) {
            if (value.endsWith(units[i])) {
                return units[i];
            }
        }
        return null;
    }
    function parseWidth(width) {
        //widthがnullまたはundefinedであればすぐに戻す
        /*
        引数widthをnullとの緩やかな(==)型チェックを行うことでnullまたはundefinedかチェックしている
        これ以降、widthの型は number | stringに絞られる
        */
        if (width == null) { //1
            return null;
        }
        //widthがnumberであれば'px'をデフォルトの単位とする
        /*
        type ofでnumber型じゃない場合、引数widthはstring型であることが確定する
        */
        if (typeof width === 'number') { //2
            return { unit: 'px', value: width };
        }
        //widthから単位を解析する
        /*
        この時点でwidthはstring型だが、
        parseUnitの返り値が Unit | nullであるため、nullの可能性を考慮して絞り込みを行っている
        */
        let unit = parseUnit(width);
        if (unit) { //3
            return { unit, value: parseFloat(width) };
        }
        //どれでもなければnullを返す
        return null; //4
    }
    console.log(parseWidth('100%')); //{unit: '%', value: 100}
    console.log(parseWidth(100)); //{unit: 'px', value: 100} number型が渡された時のデフォルトの単位を'px'としている
    console.log(parseWidth('abc')); //null
    console.log(parseWidth(undefined)); //null
};
chapter6_1_5();
//# sourceMappingURL=6.1.5.js.map