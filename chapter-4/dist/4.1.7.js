"use strict";
const chapter4_1_7 = () => {
    //addの型はFunction
    function add(a, b) {
        return a + b;
    }
    //アロー関数式で型シグネチャによるアノテート
    let log2 = (message, userId = 'No signed in') => {
        let time = new Date().toLocaleTimeString();
        console.log(time, message, userId);
    };
};
//# sourceMappingURL=4.1.7.js.map