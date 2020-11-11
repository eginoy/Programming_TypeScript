//any
//strict trueでも明示的にanyでアノテートしているのでエラーにならない
let a: any = 666
let b: any = ['danger']
let c = a + b //anyなのでエラーが発生しない
console.log(a)
console.log(b)
console.log(c)