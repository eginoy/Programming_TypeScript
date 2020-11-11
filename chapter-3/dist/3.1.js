"use strict";
// tsconfig.json内のstrictがtrueのため、引数nにアノテートしないとコンパイルエラーになる
// function squareOf(n){
//     return n * n
// }
// console.log(squareOf(2))
// console.log(squareOf('2'))
//引数にアノテート
function squareOf2(n) {
    return n * n;
}
console.log(squareOf2(3));
// error
// console.log(squareOf2('3'))
//# sourceMappingURL=3.1.js.map