"use strict";
const chapter4_2_1 = () => {
    let filter = (array, f) => {
        let result = [];
        for (let i = 0; i < array.length; i++) {
            let item = array[i];
            if (f(item)) {
                result.push(item);
            }
        }
        return result;
    };
    //error ジェネリックに型引数が必要
    // let filter2: Filter2 = (array,f) => {
    //     let result = []
    //     for(let i = 0; i < array.length; i++){
    //         let item = array[i]
    //         if(f(item)){
    //             result.push(item)
    //         }
    //     }
    //     return result
    // }
    //error ジェネリックに型引数が必要
    // type OtherFilter = Filter2
    //ジェネリックの型引数渡すことで明示的にTにnumberをバインドしている
    let filter2 = (array, f) => {
        let result = [];
        for (let i = 0; i < array.length; i++) {
            let item = array[i];
            if (f(item)) {
                result.push(item);
            }
        }
        return result;
    };
    filter2([1, 2, 3], _ => _ < 3); //[1,2]
    let stringFilter = (array, f) => {
        let result = [];
        for (let i = 0; i < array.length; i++) {
            let item = array[i];
            if (f(item)) {
                result.push(item);
            }
        }
        return result;
    };
    stringFilter(['a', 'b', 'c'], _ => _ !== 'b'); //['a','c']
};
//# sourceMappingURL=4.2.1.js.map