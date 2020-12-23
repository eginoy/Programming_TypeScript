"use strict";
const chapter6_3_1_1 = async () => {
    function getAPIResponse() {
        let result = {
            user: {
                userId: '1',
                friendList: {
                    count: 1,
                    friends: [{
                            firstName: 'John',
                            lastName: 'Wick'
                        }]
                }
            }
        };
        return new Promise(resolve => resolve(result));
    }
    function renderFriendList(friendList) {
        //...
    }
    let response = await getAPIResponse();
    renderFriendList(response.user.friendList);
    function renderFriendList2(friendList) {
        //...
    }
};
//# sourceMappingURL=6.3.1.1.js.map