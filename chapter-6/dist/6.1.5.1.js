"use strict";
const chapter6_1_5_1 = () => {
    function handle(event) {
        if (typeof event.value === 'string') {
            event.value; //string
            //...
            return;
        }
        event.value; //[number,number]
    }
    function handle2(event) {
        if (typeof event.value === 'string') {
            event.value; //string
            event.target; //HTMLElement | HTMLInputElement (!!!) event.valueの絞り込みはうまくいったが、targetはうまくいっていない
            //...
            return;
        }
        event.value; //[number, number]
        event.target; //HTMLElement | HTMLInputElement (!!!) event.valueの絞り込みはうまくいったが、targetはうまくいっていない
    }
    function handle3(event) {
        //各型にタグ付け({type: '...Event'}のところ)することで合併型の中で一意になるので、関数内で型の絞り込みができている
        if (event.type === 'TextEvent') {
            event.value; //string
            event.target; //HTMLInputElement
            //...
            return;
        }
        event.value; //[number,number]
        event.target; //HTMLElement
    }
};
//# sourceMappingURL=6.1.5.1.js.map