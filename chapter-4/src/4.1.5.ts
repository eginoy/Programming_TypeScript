const chapter4_1_5 = () => {
    function* createFibonacciGenerator(){
        let a = 0
        let b = 1
        while(true){
            yield a;
            [a,b] = [b, a + b]
        }
    }   
    let fibonacciGenerator = createFibonacciGenerator()
    fibonacciGenerator.next() //{value: 0, done: false}
    fibonacciGenerator.next() //{value: 1, done: false}
    fibonacciGenerator.next() //{value: 1, done: false}
    fibonacciGenerator.next() //{value: 2, done: false}
    fibonacciGenerator.next() //{value: 3, done: false}
    fibonacciGenerator.next() //{value: 5, done: false}

    //Generatorが生成する値をアノテートすることもできる
    function* createNumbers(): Generator<number>{
        let n = 0
        while(1){
            yield n ++
        }
    }
    let numbers = createNumbers()
    numbers.next() //{value: 0, done: false}
    numbers.next() //{value: 1, done: false}
    numbers.next() //{value: 2, done: false}
}