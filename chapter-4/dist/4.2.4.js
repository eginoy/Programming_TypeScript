"use strict";
const chapter4_2_4 = () => {
    let myEvent = {
        target: document.querySelector('#mybutton'),
        type: 'click'
    };
    function triggerEvent(event) {
        //....
    }
    triggerEvent({
        target: document.querySelector('#myButton'),
        type: 'mousover'
    });
    //まずtriggerEventの引数はMyEvent typeである
    //次にMyEvent typeのtarget に割り当てられたdocument.querySelector() の返り値からTが Element | nullであることが推論される
    //以降のTにElement | null が割り当て可能かチェックされる。
};
//# sourceMappingURL=4.2.4.js.map