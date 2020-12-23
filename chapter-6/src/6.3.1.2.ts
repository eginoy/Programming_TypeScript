const chapter6_3_1_2 = () => {
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

    //keyof演算子
    type ResponseKeys = keyof APIResponse //'user'
    type UserKeys = keyof APIResponse['user'] //'userId' | 'friendList'
    type FriendListKeys = keyof APIResponse['user']['friendList'] // 'count' | 'friends'

    //型安全なゲッター関数
    function get<
        O extends object,
        K extends keyof O
    >(
        o: O,
        k: K
    ): O[K]{
        return o[k]
    }

    type ActivityLog = {
        lastEvent: Date
        events: {
            id: string
            timestamp: Date
            type: 'Read' | 'Write'
        }[]
    }

    let activityLog: ActivityLog = {
        lastEvent: new Date('2020-12-22'),
        events: [
            {
                id: '1',
                timestamp: new Date(),
                type: 'Read'
            }
        ]
    }
    let lastEvent = get(activityLog,'lastEvent') // Date type
    
    //最大で3つのキーまで受け付けるようにgetをオーバーロード
    type Get = {
        <
            O extends object,
            K1 extends keyof O
        >(o: O, k: K1): O[K1]
        <
            O extends object,
            K1 extends keyof O,
            K2 extends keyof O[K1]
        >(o: O, k: K1, k2: K2): O[K1][K2]
        <
        O extends object,
        K1 extends keyof O,
        K2 extends keyof O[K1],
        K3 extends keyof O[K1][K2]
        >(o: O, k: K1, k2: K2, k3: K3): O[K1][K2][K3]
    }

    let get2: Get = (object: any, ...keys: string[]) => {
        let result = object
        keys.forEach(key => result = result[key])
        return result
    }
    get2(activityLog,'events',0,'type') //'Read'
    
    get2(activityLog,'bad') //型安全なので存在しないプロパティを指定すると静的チェックでエラーになる。
}
chapter6_3_1_2()