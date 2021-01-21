"use strict";
const chapter7_2 = () => {
    //例外をスローして例外やエラーを処理するパターン
    /*
     * 大体の場合parseのような例外をスローする関数を使用するユーザーは、try,catchでラップして使用してくれない。
       (わざわざ関数内を確認して例外のスローがあるのかまで確認しないので)
     */
    function ask() {
        return prompt('When is your birthday');
    }
    //カスタムエラー型
    class InvalidDateFormatError extends RangeError {
    }
    class DateIsInTheFutureError extends RangeError {
    }
    /**
     *
     * @throws  {InvalidDateFormatError} ユーザーが不正な形式の日付を入力した
     * @throws  {DateIsInTheFutureError} ユーザーが未来の日付を入力した
     */
    function parse(birthday) {
        if (!birthday)
            throw new RangeError('Enter a date in the form YYYY/MM/DD');
        let date = new Date(birthday);
        if (!isValid(date)) {
            throw new InvalidDateFormatError('Enter a date in the form YYYY/MM/DD');
        }
        if (date.getTime() > Date.now()) {
            throw new DateIsInTheFutureError('Are you a timelord?');
        }
        return date;
    }
    //与えられた日付が有効化チェックする
    function isValid(date) {
        return Object.prototype.toString.call(date) === '[object Date]'
            && !Number.isNaN(date.getTime());
    }
    try {
        let date = parse(ask());
        console.info('Date is', date.toString());
    }
    catch (e) {
        if (e instanceof InvalidDateFormatError) {
            console.error(e.message);
        }
        else if (e instanceof DateIsInTheFutureError) {
            console.info(e.message);
        }
        else {
            throw e;
        }
    }
};
//# sourceMappingURL=7.2.js.map