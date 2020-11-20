const chapter4_2 = () => {
    //JavaScriptでのfilter処理
    // function filter(array,f){
    //     let resutl = []
    //     for(let i = 0; i < array.length; i++){
    //         let item = array[i]
    //         if(f(item)){
    //             resutl.push(item)
    //         }
    //     }
    //     returnresutl
    // }
    // filter([1,2,3],_ => _ < 3) //[1,2]

    type Fileter = {
        // (array: unknown[],f: unknown): unknown[]
        //numberで埋めた場合
        // (array: number[], f: (item: number) => boolean): number[]
        //stringにも対応したい場合
        // (array: string[], f: (item: string) => boolean): string[]

        //全パターンを書き出すのは面倒だがobjectで対応するのは無理
        // (array: object[], f: (item: object) => boolean): object[]
    }
    // let filter: Fileter = (array: unknown[],f: unknown): unknown[] => {
    //     let resutl = []
    //     for(let i = 0; i < array.length; i++){
    //         let item = array[i]
    //         if(f(item)){
    //             resutl.push(item)
    //         }
    //     }
    //     return resutl
    // }
    // let names = [
    //     {firstName: 'beth'},
    //     {firstName: 'caitlyn'},
    //     {firstName: 'xin'}
    // ]
    //object渡すと実行時エラー
    // let result = filter(
    //     names,
    //     _ => _.firstName.startsWith('b')
    // )

    //ジェネリック型(あらかじめ型がわからないときに使う)
    type Filter = {
        <T>(array: T[],f: (item: T) => boolean): T[]
    }

    let filter: Filter = (array,f) =>{
        let resutl = []
        for(let i = 0; i < array.length; i++){
            let item = array[i]
            if(f(item)){
                resutl.push(item)
            }
        }
        return resutl
    }
    
    //Tはnumberにバインドされる
    filter([1,2,3],_ => _ < 3) //[1,2]

    //Tはstringにバインドされる
    filter(['a','b'], _ => _ !== 'b') //['a']

    let names = [
        {firstName: 'beth'},
        {firstName: 'caitlyn'},
        {firstName: 'xin'}
    ]
    //Tは{firstName: string}にバインドされる
    filter(names,_ => _.firstName.startsWith('b')) //[{firstName: 'beth'}]
}
chapter4_2()