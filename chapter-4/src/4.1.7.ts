const chapter4_1_7 = () => {
    //addの型はFunction
    function add(a: number,b: number):number{
        return a + b
    }

    //型シグネチャ:関数と引数として渡す場合や、関数を別の関数から返す時に関数の型付けをするのにつかう
    // (a: number,b: number) => number

    // function greet(name: string)
    type Greet = (name: string) => string

    // function log(message: string, userId?: string)
    type Log(message: string, userId?: string) => void 
    
    // function sumVariadicSafe(...numbers: number[]): number
    type SumVariadicSafe = (...number: number[]) => number

    type Log2 = (message: string, userId?:string) => void
    //アロー関数式で型シグネチャによるアノテート
    let log2: Log2 = (
        message,
        userId = 'No signed in'
    ) => {
        let time = new Date().toLocaleTimeString()
        console.log(time,message,userId)
    }
}