"use strict";
const chapter4_1_4 = () => {
    let x = {
        a() {
            return this;
        }
    };
    x.a(); //a()の本体内では、thisはオブジェクト
    let a = x.a;
    a(); //a()の本体内ではthisはundefined
    //thisがanyなのでerror
    // function fancyDate(){
    //     return `${this.getMonth() + 1}/${this.getDate()}/${this.getFullYear()}`
    // }
    //thisにアノテートすることもできる
    function fancyDate() {
        return `${this.getMonth() + 1}/${this.getDate()}/${this.getFullYear()}`;
    }
    fancyDate.call(new Date);
    // fancyDate.call() //error thisにアノテートしたおかげで、TypeScriptがthisをチェックしてくれる
};
//# sourceMappingURL=4.1.4.js.map