"use strict";
const chapter4_1_3 = () => {
    function add(a, b) {
        return a + b;
    }
    add(10, 20); //30
    add.apply(null, [10, 20]); //30
    add.call(null, 10, 20); //30
    add.bind(null, 10, 20)(); //30
};
//# sourceMappingURL=4.1.3.js.map