const chapter7_3 = () => {
    //例外を返して例外やエラーを処理するパターン
    /*
     * 関数の戻り値として例外を返すことによって、関数の利用者に例外が返されることが伝わる
     */

    function ask(){
        return prompt('When is your birthday');
    }

    //カスタムエラー型
    class InvalidDateFormatError extends RangeError {}
    class DateIsInTheFutureError extends RangeError {}

    function parse(
        birthday: string | null
    ): Date | InvalidDateFormatError | DateIsInTheFutureError {
        if (!birthday) return new InvalidDateFormatError('Enter a date in the form YYYY/MM/DD')
        let date = new Date(birthday)
        if (!isValid(date)) {
            return new InvalidDateFormatError('Enter a date in the form YYYY/MM/DD')
        }
        if (date.getTime() > Date.now()) {
            return new DateIsInTheFutureError('Are you a timelord?')
        }
        return date
    }

    //与えられた日付が有効化チェックする
    function isValid(date: Date) {
        return Object.prototype.toString.call(date) === '[object Date]'
            && !Number.isNaN(date.getTime());
    }

    let result = parse(ask()) //Dateオブジェクト又はエラー
    if(result instanceof InvalidDateFormatError){
        console.error(result.message)
    }else if(result instanceof DateIsInTheFutureError){
        console.error(result.message)
    }else{
        console.info('Date is',result.toISOString())
    }

    //上のようにエラーを個別に処理しない場合
    let result2 = parse(ask())
    if(result2 instanceof Error){ //それぞれのカスタムエラー型のスーパータイプであるErrorでまとめて判定している
        console.error(result2.message)
    }else{
        console.info('Date is', result2)
    }

    
     // 安全性は高いが、冗長になりやすい
    class Error1 extends TypeError{}
    class Error2 extends TypeError{}
    class Error3 extends TypeError{}

    function x(dateString: any): string | Error1 {
        if( typeof dateString === 'string'){
            return dateString
        }
        return new Error1('parameter is not string')
    }

    function y(): string | Error1 | Error2 {
        let a = x(1)
        if(a instanceof Error){
            return a
        }
        return a;
    }

    function z(): string | Error1 | Error2 | Error3 {
        let b = y()
        if(b instanceof Error){
            return b
        }
        return b
    }
}