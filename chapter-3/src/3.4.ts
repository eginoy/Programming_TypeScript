const chpter3_4 = () => {
    let a = 1042 // number type
    let b = 'apple and oranges' // string type
    const c = 'pineappls' // 'pineapples' type
    let d = [true,true,false]  // boolean[] type
    let e = {type: 'ficus'} // {type: string} type
    let f = [1,false] // (number | boolean)[] type
    const g = [3] // number[] type
    let h = null // any type :型の拡大で上位に属する型がanyなので(nullはどのtypeにも属さないから？)

    let i: 3 = 3
    // i = 4 //error iは 3 type なので(number typeではない)
    
    let j = [1,2,3]
    j.push(4)
    // j.push('5') //error jは処理割り当て時に number[] type と推論されるので string typeは割り宛てられない

    // let k: never = 4 //error neverはボトム型のため、他のすべての型に当てはめることができるが、neverに対してはどの型も割り当てることはできない

    let l: unknown = 4
    // let m = l * 2 //error lはunknowon type なので下記のようにtypeof,instanceofなどでlの型を絞り混む必要がある
    if (typeof l === 'number') {
        let m = l * 2
    }
}