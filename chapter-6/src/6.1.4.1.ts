const chapter6_1_4_1 = () => {
    
    let a = {x: 3} //number type
    let b: {x: 3} //{x: 3} type
    let c = {x: 3} as const //{readonly x: 3} type (const アサーション 型の拡大を防ぐ)

    let d = [1,{x: 2}] //(number | {x: number})[] type
    let e = [1,{x: 2}] as const // readonly [1,{readonly x: 2}] 深くネストされていても再起的にreadonlyとする
}