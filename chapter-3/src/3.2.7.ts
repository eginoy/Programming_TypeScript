//symbolよくわからないのでスキップ
const chpter3_2_7 = () => {
    let a = Symbol('a')
    let b: symbol = Symbol('b')
    let c = a === b 
    // let d  = a  + 'x' //error

    //unique symbol
    const e = Symbol('e')
    const f: unique symbol = Symbol('f')
    // let g: unique symbol = Symbol('f') //error
    let h = e === e
    // let i = e === f //error
}