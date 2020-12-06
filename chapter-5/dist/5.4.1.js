"use strict";
const chapter5_4_1 = () => {
    let user = {
        name: 'Ashley',
        age: 30
    };
    // interface User3{
    //     age: number //ageフィールドに対して矛盾したアノテートをしているのでerror
    // }
    //error インターフェースでジェネリックを宣言しているとき、2つのインターフェースを結合するにはジェネリックの名前まで揃えないとerrorになる(AgeとAge2)
    // interface User4<Age extends number>{
    //     age: Age
    // }
    // interface User4<Age2 extends number>{
    //     age: Age2
    // }
};
//# sourceMappingURL=5.4.1.js.map