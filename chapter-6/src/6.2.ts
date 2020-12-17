const chapter6_2 = () => {
    type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri'
    type Day = Weekday | 'Sat' | 'Sun'

    /*
    error TypeScriptは全てのケースを網羅しているか確認する。
    undefinedで返ってくるケースを見逃し、記述していないのでコンパイル時エラーになる
    */
    function getNextDay(w: Weekday): Day{
        switch(w){
            case 'Mon': return 'Tue'
        }
    }

    /*
    tsconfigのcompilerOptionsで'noImplicitReturns'を有効化すると、
    返り値がvoidでない関数が値を返さないケースが存在する場合、警告してくれるようになる。
    (strictには含まれないので、手動で有効化する必要がある)
    */
    function isBig(n: number){
        if(n >= 100){
           return true
        }
    }
}