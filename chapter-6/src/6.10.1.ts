const chapter6_10_1 = () => {
    let k: (a: string) => string
    k = ((a: number | string) => 'b') as (a: number | string) => string

    enum E {
        X = 'X'
    }

    enum F {
        X = 'X'
    }
    let l: F.X
    l = E.X as E.X
}