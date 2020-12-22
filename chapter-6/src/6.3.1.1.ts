const chapter6_3_1_1 = async () => {
    type APIResponse = {
        user: {
            userId: string,
            friendList: {
                count: number,
                friends: {
                    firstName: string,
                    lastName: string
                }[]
            }
        }
    }

    function getAPIResponse(): Promise<APIResponse> {
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
        }
        return new Promise(resolve => resolve(result))
    }

    function renderFriendList(friendList: unknown){
        //...
    }

    let response = await getAPIResponse()
    renderFriendList(response.user.friendList)


    //ルックアップ型
    type FriendList = APIResponse['user']['friendList']

    function renderFriendList2(friendList: FriendList){
        //...
    }

    //friendListの特定個人を表す型
    type Friend = FriendList['friends'][number]
}