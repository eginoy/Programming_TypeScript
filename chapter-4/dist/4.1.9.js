"use strict";
const chapter4_1_9 = () => {
    let reserve = (from, toOrDestination, destination) => {
        let reservation = {
            from: new Date(),
            toOrDestination: '',
            destination: ''
        };
        if (toOrDestination instanceof Date && destination !== undefined) {
            //宿泊旅行の予約
            reservation = {
                from: from,
                toOrDestination: toOrDestination,
                destination: destination
            };
        }
        else if (typeof toOrDestination === 'string') {
            //日帰り旅行
            reservation = {
                from: from,
                destination: toOrDestination
            };
        }
        return reservation;
    };
    console.log(reserve(new Date(), new Date(), 'okinawa'));
    // let createElement: CreateElement = (tag: string): HTMLElement => {
    //     //...
    // }
    function warnUser(warning) {
        if (warnUser.wasCalled) {
            return;
        }
        warnUser.wasCalled = true;
        alert(warning);
    }
    warnUser.wasCalled = false;
    const assignedWasUser = warnUser;
    assignedWasUser('warning!');
};
chapter4_1_9();
//# sourceMappingURL=4.1.9.js.map