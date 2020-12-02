const chapter4_5 = () => {
    //練習問題3
    type Reservation = unknown
    type Reserve = {
        (from: Date, to: Date, destination: string): Reservation
        (from: Date, destination: string): Reservation
        (destination: string): Reservation
    }

    let reserve: Reserve = (
        fromOrDestination?: string | Date,
        toOrDestination?: string | Date,
        destination?: string
    ):Reservation => {
        let reservation: Reservation

        if(toOrDestination instanceof Date && fromOrDestination instanceof Date &&destination !== undefined){
            reservation = {
                from: fromOrDestination,
                to: new Date(),
                destination: destination
            }
        }else if(typeof toOrDestination === 'string' && fromOrDestination instanceof Date){
               reservation = {
                    from: fromOrDestination,
                    destination: toOrDestination
                }
        }else if(typeof fromOrDestination === 'string'){
            reservation ={ destination: destination}
        }
        return reservation
    }
    console.log(reserve)

    //練習問題4
    //渡された関数の第二引数がstring typeであることを制限するcallを定義する。(第二引数がstringでないときにコンパイルエラー)
    function call<T extends [unknown,string,...unknown[]],R>(
        f:(...args: T) => R,
        ...args: T
    ): R{
        return f(...args)
    }

    function fill(length: number, value: string): string[]{
        return Array.from({length},() => value)
    }

    call(fill,10,'a')

    //練習問題5
    //is関数を定義する。(下記のように使える関数)
    console.log(is('string','otherstring')) //false
    console.log(is(true,false)) //false
    console.log(is(42,42)) //true
    // console.log(is(10,'foo')) //異なる型を渡すとerror

    //任意の数も渡せるように
    console.log(is(1,1,1)) //true
    console.log(is(1,2,3)) //false

    function is<T>(
        a: T,
        ...b: [T,...T[]]
    ): boolean{
        return b.every(_ => _ === a);
    }
}
chapter4_5()