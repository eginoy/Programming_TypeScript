const chapter3_2_6 = () => {
    let a = 'hello' // string type
    var b = 'billy' // string type
    const c = '!' // '!' type
    let d = a + ' ' + b + c  // string type
    let e: string = 'zoom'  // string type
    let f: 'john' = 'john' // 'john' type
    // let g: 'john' = 'zoe' // error 'john'typeに'zoe'typeで初期化は不可 
}