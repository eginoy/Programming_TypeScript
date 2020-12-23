"use strict";
const chapter6_3_1_2 = () => {
    //型安全なゲッター関数
    function get(o, k) {
        return o[k];
    }
    let activityLog = {
        lastEvent: new Date('2020-12-22'),
        events: [
            {
                id: '1',
                timestamp: new Date(),
                type: 'Read'
            }
        ]
    };
    let lastEvent = get(activityLog, 'lastEvent'); // Date type
    let get2 = (object, ...keys) => {
        let result = object;
        keys.forEach(key => result = result[key]);
        return result;
    };
    console.log(get2(activityLog, 'events', 0, 'type')); //'Read'
};
chapter6_3_1_2();
//# sourceMappingURL=6.3.1.2.js.map