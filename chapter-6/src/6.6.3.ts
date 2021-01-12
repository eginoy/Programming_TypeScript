const chapter6_6_3 = () => {
    let userId: string
    userId.toUpperCase() //error userIdに値が割り当てられる前に参照しようとしているので

    let userId2: string
    fetchUser()
    /*
     TypeScriptはfetchUser関数でuserId2に値が割り当てられることを静的にチェックできないので、
     userId2.toUpperCaseでエラーになる
     */
    userId2.toUpperCase()
    
    function fetchUser(){
        userId2 = 'abc'
        userId3 = 'def'
    }

    let userId3!: string
    /*
     userId3宣言時に!(明確な割当アサーション)を付与することで、
     TypeScriptに対してuserId3は読み取られるまでに割り当てされることを伝えることができる。
     */
    fetchUser()
    userId3.toUpperCase()
}