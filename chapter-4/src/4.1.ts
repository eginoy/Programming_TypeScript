const chapter4_1 = () => {
    //引数にはアノテートするようにする
    function add(a: number,b: number){
        return a + b
    }

    //関数の返り値にもアノテートはできるが、推論されるのでしなくても良い(返り値を明示的にわかりやすくしたいときはアノテートする)
    function add2(a: number,b: number): number{
        return a + b
    }

    //名前付き関数
    function greet(name: string){
        return 'hello' + name        
    }

    //関数式
    let greet2 = function(name: string){
        return 'hello' + name
    }

    //アロー関数式
    let greet3 = (name: string) => {
        return 'hello' + name
    }

    //アロー関数式の省略記法
    let greet4 = (name: string) =>
        'hello' + name
    
    //関数コンストラクター 型安全でないのでこれは使わない
    let greet5 = new Function('name', 'return "hello" + name')

    add(1,2) //3
    greet('Crystal') // hello Crystal

    // add(1) //error 引数足りない
    // add(1,'a') //error 第二引数number type に対してstring typeを割り当てている
}