"use strict";
const chapter6_2 = () => {
    /*
    error TypeScriptは全てのケースを網羅しているか確認する。
    undefinedで返ってくるケースを見逃し、記述していないのでコンパイル時エラーになる
    */
    function getNextDay(w) {
        switch (w) {
            case 'Mon': return 'Tue';
        }
    }
    /*
    tsconfigのcompilerOptionsで'noImplicitReturns'を有効化すると、
    返り値がvoidでない関数が値を返さないケースが存在する場合、警告してくれるようになる。
    (strictには含まれないので、手動で有効化する必要がある)
    */
    function isBig(n) {
        if (n >= 100) {
            return true;
        }
    }
};
//# sourceMappingURL=6.2.js.map