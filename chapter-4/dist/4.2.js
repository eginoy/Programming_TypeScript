"use strict";
const chapter4_2 = () => {
    //JavaScriptでのfilter処理
    // function filter(array,f){
    //     let resutl = []
    //     for(let i = 0; i < array.length; i++){
    //         let item = array[i]
    //         if(f(item)){
    //             resutl.push(item)
    //         }
    //     }
    //     returnresutl
    // }
    // filter([1,2,3],_ => _ < 3) //[1,2]
    let filter = (array, f) => {
        let resutl = [];
        for (let i = 0; i < array.length; i++) {
            let item = array[i];
            if (f(item)) {
                resutl.push(item);
            }
        }
        return resutl;
    };
    //Tはnumberにバインドされる
    filter([1, 2, 3], _ => _ < 3); //[1,2]
    //Tはstringにバインドされる
    filter(['a', 'b'], _ => _ !== 'b'); //['a']
    let names = [
        { firstName: 'beth' },
        { firstName: 'caitlyn' },
        { firstName: 'xin' }
    ];
    //Tは{firstName: string}にバインドされる
    filter(names, _ => _.firstName.startsWith('b')); //[{firstName: 'beth'}]
};
chapter4_2();
//# sourceMappingURL=4.2.js.map