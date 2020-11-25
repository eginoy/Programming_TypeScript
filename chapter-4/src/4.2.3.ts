const chapter4_2_3 = () => {
    function map<T,U>(array: T[], f: (item: T) => U): U[] {
        let result = [];
        for(let i = 0; i < array.length; i++ ){
            result[i] = f(array[i]);
        }
        return result;
    }
    //明示的なアノテートなし
    map(
        ['a','b','c'], //Tの配列
        _ => _ === 'a' //Uの配列
    )

    //明示的なアノテートあり
    map<string,boolean>(
        ['a','b','c'], //Tの配列
        _ => _ === 'a' //Uの配列
    )

    //error 一部のみアノテートはできない。(アノテートするときは全て行う)
    // map<string>(
    //     ['a','b','c'], //Tの配列
    //     _ => _ === 'a' //Uの配列
    // )

    //割り当て不可の時はエラーでる
    map<string, boolean | string | null>(
        ['a', 'b', 'c'], //Tの配列
        _ => {
            if(_ === 'a') return _;
            return false;
        } //Uの配列
    )
    
    //error 返り値とアノテートが異なるので割り当て不可
    // map<string, number>(
    //     ['a', 'b', 'c'], //Tの配列
    //     _ => _ === 'a' //Uの配列
    // )
    
    let promise = new Promise(resolve => {
        resolve(45)
    })
    // promise.then(result => //unknownと推論される
    //     result * 4 //error resultはunknown
    // )
    
    let promise2 = new Promise<number>(resolve => {
        resolve(45)
    })
    promise2.then(result => //resultはnumber type:promise2でnumberでアノテートしているので
        result * 4    
    )
}
chapter4_2_3()