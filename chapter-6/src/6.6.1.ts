const chapter6_6_1 = () => {
    function formatInput(input: string){
        //...
    }

    function getUserInput(): string | number{
        //...
    }

    let input = getUserInput()

    //inputが文字列であることを主張
    formatInput(input as string)

    //上と同様だがTSXの構文とぶつかる場合があるのでこっちは使わない
    formatInput(<string>input)

    function addToList(list: string[], item:string){
        //...
    }
    //型アサーションは安全ではないのでなるべく使わない。
    addToList('this is really,' as any,'really unsafe')
    addToList(1 as any,'unsafe')
}