"use strict";
const chapter4_2_6 = () => {
    let myButton = new HTMLButtonElement();
    let buttonEvent = {
        target: myButton,
        type: 'a'
    };
    let buttonEvent2 = {
        target: 'buttonTag',
        type: 'button'
    };
    let elementEvent = {
        target: new HTMLCanvasElement(),
        type: 'canvas'
    };
    let buttonEvent3 = {
        target: myButton,
        type: 'button'
    };
    //無効
    // type MyEvent5<
    //     Target extends HTMLElement = HTMLElement
    //     Type extends string //error デフォルトの型を持つジェネリック型はデフォルトの型を持たないジェネリック型より先に宣言できない
    // >={
    //     type: Type
    //     target: Target,
    // }
};
//# sourceMappingURL=4.2.6.js.map