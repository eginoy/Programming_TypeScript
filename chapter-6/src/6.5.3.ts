const chapter6_5_3 = () => {
    //TypeScript組み込みの条件型
    //Exclude<T, U>
    //Tに含まれていて、Uに含まれていない型を計算する。
    type A = number | string
    type B = string
    type C = Exclude<A,B> //number

    //Extract<T,U>
    //Tに含まれている型のうち、Uに割り当てることのできるものを計算する。
    type A2 = number | string
    type B2 = string
    type C2 = Extract<A,B> //string

    //NonNullable<T>
    //nullとundefinedを除外したTのバージョンを計算する。
    type A3 = {a?: number | null}
    type B3 = NonNullable<A3['a']>  //number

    //ReturnType<F>
    //関数の戻り値の型を計算する。（ジェネリックやオーバーロードされた関数を渡しても期待通りに動作しない）
    type F = (a: number) => string
    type R = ReturnType<F> //string

    //InstanceType<C>
    //クラスコンストラクターのインスタンス型を計算します
    type A5 = {new(): B5}
    type B5 = {b: number}
    type I = InstanceType<A5> //{b: number}
}