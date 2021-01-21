"use strict";
const chapter7_3 = () => {
    //例外を返して例外やエラーを処理するパターン
    function ask() {
        return prompt('When is your birthday');
    }
    //カスタムエラー型
    class InvalidDateFormatError extends RangeError {
    }
    class DateIsInTheFutureError extends RangeError {
    }
    function parse(birthday) {
        if (!birthday)
            return new InvalidDateFormatError('Enter a date in the form YYYY/MM/DD');
        let date = new Date(birthday);
        if (!isValid(date)) {
            return new InvalidDateFormatError('Enter a date in the form YYYY/MM/DD');
        }
        if (date.getTime() > Date.now()) {
            return new DateIsInTheFutureError('Are you a timelord?');
        }
        return date;
    }
    //与えられた日付が有効化チェックする
    function isValid(date) {
        return Object.prototype.toString.call(date) === '[object Date]'
            && !Number.isNaN(date.getTime());
    }
    let result = parse(ask()); //Dateオブジェクト又はエラー
    if (result instanceof InvalidDateFormatError) {
        console.error(result.message);
    }
    else if (result instanceof DateIsInTheFutureError) {
        console.error(result.message);
    }
    else {
        console.info('Date is', result);
    }
};
//# sourceMappingURL=7.3.js.map