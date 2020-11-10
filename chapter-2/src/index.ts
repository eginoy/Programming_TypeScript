console.log('Hello TypeScript!')

let a = 1 + 2
let b = a + 3
let c ={
    apple: a,
    banana: b
}
let d = c.apple * 4

//TypeError
let d = "apple"

//TypeScriptが推論できない型のコード
let e = {} + 1