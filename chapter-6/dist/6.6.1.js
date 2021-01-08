"use strict";
const chapter6_6_1 = () => {
    function formatInput(input) {
        //...
    }
    function getUserInput() {
        //...
    }
    let input = getUserInput();
    //inputが文字列であることを主張
    formatInput(input);
    //上と同様だがTSXの構文とぶつかる場合があるのでこっちは使わない
    formatInput(input);
    function addToList(list, item) {
        //...
    }
    //型アサーションは安全ではないのでなるべく使わない。
    addToList('this is really,', 'really unsafe');
    addToList(1, 'unsafe');
};
//# sourceMappingURL=6.6.1.js.map