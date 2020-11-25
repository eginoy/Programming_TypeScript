"use strict";
const chapter4_2_3 = () => {
    function map(array, f) {
        let result = [];
        for (let i = 0; i < array.length; i++) {
            result[i] = f(array[i]);
        }
        return result;
    }
    console.log(map(['a', 'b', 'c'], //Tの配列
    //Tの配列
    _ => _ === 'a' //Uの配列
    ));
};
chapter4_2_3();
//# sourceMappingURL=4.2.3.js.map