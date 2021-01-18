const chapter6_10_4 = () => {
    let globalCache = {
        get(key: string){
            return 'user'
        }
    }

    let userId!: string
    fetchUser();
    userId.toUpperCase()

    function fetchUser(){
        return globalCache.get('userId')
    }
 
    //上記のコードを明確な割り当てアサーション(!)を使わずに実装する
    let userId2 = fetchUser2(); 
    userId2.toUpperCase()

    function fetchUser2(){
        return globalCache.get('userId2')
    }
}