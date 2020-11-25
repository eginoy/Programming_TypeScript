"use strict";
const chapter4_2_2 = () => {
    // let filter4: Filter4<number> = //....
    // function filter<T>(array: T[], f: (item: T) => boolean): T[]{
    //     //....
    // }
    // function map(array: unknown[],f: (item: unkown) => unknown[]): unknown[]{
    //     let result = [];
    //     for(let i = 0; i < array.length; i++){
    //         result[i] = f(array[i])
    //     }
    //     return result;
    // }
    function GenericMap(array, f) {
        let result = [];
        for (let i = 0; i < array.length; i++) {
            result[i] = f(array[i]);
        }
        return result;
    }
};
//# sourceMappingURL=4.2.2.js.map