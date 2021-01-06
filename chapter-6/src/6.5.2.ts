const chapter6_5_2 = () => {
    //配列の要素の型を取得する条件型ElementType
    type ElementType<T> = T extends unknown[] ? T[number] : T
    type A = ElementType<number[]> //number
    
    //inferを使用した場合
    type ElementType2<T> = T extends (infer U)[] ? U : T
    type B = ElementType2<number[]> //number

    type SecondArg<F> = F extends (a: any, b: infer B) => any ? B : never
    //Array.sliceの型を取得
    type F = typeof Array['prototype']['slice'] // (start?: number | undefined, end?: number | undefined) => any[]

    type S = SecondArg<F> //number | undefined
}