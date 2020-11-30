const chapter4_2_5_2 = () => {
    function call(
        f: (...args: unknown[]) => unknown,
        ...args: unknown[]
    ): unknown {
        return f(...args)
    }

    function fill(lentgh: number, value: string): string[] {
        return Array.from({ length }, () => value)
    }
    // call(fill,10,'a')//10個の'a'が入った配列


    function call2<T extends unknown[], R>(
        f: (...args: T) => R,
        ...args: T
    ): R {
        return f(...args)
    }

    let a = call2(fill, 10, 'a')
    // let b = call2(fill,10) //error fill関数に渡す引数が不足している
    // let c = call2(fill,10,'a','b') //error fill関数に渡す引数が多い
}