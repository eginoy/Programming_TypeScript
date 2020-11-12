const chapter_3_2_2 = () => { //globalで変数が衝突するので関数内で行う
    let a: unknown = 30 //aはunknown
    let b = a === 123 //bはboolean
    // let c = a + 10 // aはunknown
    if (typeof a === 'number'){ //typeof または instanceof でTypeScriptに型を示せる
        let d = a + 10
    }
    console.log(a)
}
chapter_3_2_2()