"use strict";
const chapter4_1_1 = () => {
    function log(message, userId) {
        let time = new Date().toLocaleTimeString();
        console.log(time, message, userId || 'Not signed in');
    }
    log('Page loaded');
    log('User signed in', 'd522452');
    function log2(message, userId = 'Not signed in') {
        let time = new Date().toLocaleTimeString();
        console.log(time, message, userId);
    }
    log2('Page loaded');
    log2('User signed in', 'd522452');
    function log3(message, context = {}) {
        let time = new Date().toLocaleTimeString();
        console.log(time, message, context.userId);
    }
    log3('Page loaded');
    log3('User signed in', { appId: 'xxxx' });
    log3('User signed in', { userId: 'd2235234' });
    log3('User signed in', { appId: 'xxxxx', userId: 'd2235234' });
};
//# sourceMappingURL=4.1.1.js.map