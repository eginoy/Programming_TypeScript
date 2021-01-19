const chapter7_1 = () => {
    //nullを返して例外やエラーを処理するパターン
    /**
      nullを返してくる処理の後で、都度nullチェックをする必要があるので助長になりやすい
      エラーの理由を調査する際の情報不足になりやすい。
     */
    function ask(){
        return prompt('When is your birthday')
    }

    function parse(birthday: string | null): Date | null{
        if(!birthday) return null

        let date = new Date(birthday);
        if(!isValid(date)){
            return null
        }
        return date
    }

    //与えられた日付が有効化チェックする
    function isValid(date: Date){
        return Object.prototype.toString.call(date) === '[object Date]'
        && !Number.isNaN(date.getTime());
    }

    let date = parse(ask())
    if(date){
        console.info('Date is', date.toString())
    }else{
        console.error('Error parsing date for some reason')
    }
