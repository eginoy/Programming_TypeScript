"use strict";
const chapter4_1_6 = () => {
    //iteratorは本筋(TypeScriptの学習)から外れるのでスキップ
    let numbers = {
        *[Symbol.iterator]() {
            for (let n = 1; n <= 10; n++) {
                yield n;
            }
        }
    };
};
//# sourceMappingURL=4.1.6.js.map