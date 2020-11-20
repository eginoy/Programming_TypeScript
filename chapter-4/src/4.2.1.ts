const chapter4_2_1 = () => {
    //ジェネリックはいつバインドされるか
    type Filter = {
        //Filter型の関数を呼び出す時にTに型をバインドする
        <T>(array: T[], f: (item: T) => boolean): T[]
    }
    let filter: Filter = (array,f) => {
        let result = []
        for(let i = 0; i < array.length; i++){
            let item = array[i]
            if(f(item)){
                result.push(item)
            }
        }
        return result
    }

    type Filter2<T> = {
        (array: T[], f: (item: T) => boolean): T[]
    }

    //error ジェネリックに型引数が必要
    // let filter2: Filter2 = (array,f) => {
    //     let result = []
    //     for(let i = 0; i < array.length; i++){
    //         let item = array[i]
    //         if(f(item)){
    //             result.push(item)
    //         }
    //     }
    //     return result
    // }
    //error ジェネリックに型引数が必要
    // type OtherFilter = Filter2

    //ジェネリックの型引数渡すことで明示的にTにnumberをバインドしている
    let filter2: Filter2<number> = (array,f) => {
        let result = []
        for(let i = 0; i < array.length; i++){
            let item = array[i]
            if(f(item)){
                result.push(item)
            }
        }
        return result
    }
    filter2([1,2,3],_ => _ < 3) //[1,2]
    //ジェネリックの型引数渡すことで明示的にTにstringをバインドしている
    type StringFilter = Filter2<string>
    let stringFilter: StringFilter = (array,f) => {
        let result = []
        for(let i = 0; i < array.length; i++){
            let item = array[i]
            if(f(item)){
                result.push(item)
            }
        }
        return result
    }
    stringFilter(['a','b','c'], _ => _ !== 'b') //['a','c']
}