const chapter5_6 = () => {
    //値
    let a = 1999
    function b(){}

    //型
    type a = number
    interface b{
        (): void
    }

    if(a + 1 > 3) return true //aが値として扱われていることをTypeScriptは文脈から推論する
    let x: a = 3 //aが型として扱われていることをTypeScriptは文脈から推論する

    class C {}
    let c: C //この文脈では、CはCクラスのインスタンス型
     = new C //この文脈では、Cは値であるCを指している

    enum E {F,G}
    let e: E //この文脈では、Eは列挙型であるEの型を指している
     = E.F //この文脈では、Eは値であるEを指している

    
    type State = {
        [key: string]: string
    }

    class StringDatabase{
        state: State = {}
        get(key: string): string | null{
            return key in this.state ? this.state[key] : null
        }
        set(key: string,value: string): void{
            this.state[key] = value
        }
        static from(state: State){
            let db = new StringDatabase
            for(let key in state){
                db.set(key,state[key])
            }
            return db
        }
    }

    //上のクラス宣言によって
    // インスタンス型StringDatabaseと
    interface StringDatabase{
        state: State
        get(key: string): string | null
        set(key: string,value:string): void
    }
    //コンストラクター型StringDatabaseが生成される
    interface StringDatabaseConstructor{
        new(): StringDatabase
        from(state: State): StringDatabase
    }

    // 引数をとるコンストラクターの宣言も可能
    class StringDatabase2 {
        constructor(public state: State = {}){}
    }
    interface StringDatabase2Constructor{
        new(state?: State): StringDatabase2
        from(state: State): StringDatabase2
    }
}