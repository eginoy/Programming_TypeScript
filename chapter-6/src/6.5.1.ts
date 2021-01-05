const chapter6_5_1 = () => {
    type ToArray<T> = T[]
    type A = ToArray<number> //number[]
    type B = ToArray<number | string> //(number | string)[]

    type ToArray2<T> = T extends unknown ? T[] : T[]
    type A2 = ToArray2<number> //number[]
    type B2 = ToArray2<number | string> //number[] | string[] (分配されている)

    type Without<T,U> = T extends U ? never : T
    type A3 = Without<
    boolean | number | string,
    boolean
    > //number | string
}