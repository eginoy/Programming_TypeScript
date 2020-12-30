const chapter6_4_1 = () => {
    let a = [1,true] // (number | boolean) []
    
    //タプルについての型推論の改善
    function tuple<
        T extends unknown[]
    >(
       ...ts: T 
    ): T{
        return ts
    }
    let b2 = tuple(1,true) //[number,boolean]
}