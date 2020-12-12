"use strict";
const chapter6_1_2_1 = () => {
    function deleteUser(user) {
        delete user.id;
    }
    let existinUser = {
        id: 123456,
        name: 'Ima User'
    };
    deleteUser(existinUser);
    console.log(existinUser.id);
};
chapter6_1_2_1();
//# sourceMappingURL=6.1.2.1.js.map