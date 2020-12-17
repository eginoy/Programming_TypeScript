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
    値を返さない関数に対して警告してくれるようになる。
    */
    function isBig(n) {
        if (n >= 100) {
            true;
        }
    }
};
//# sourceMappingURL=6.2.js.map