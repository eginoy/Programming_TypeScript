"use strict";
const chapter5_6 = () => {
    //値
    let a = 1999;
    function b() { }
    if (a + 1 > 3)
        return true; //aが値として扱われていることをTypeScriptは文脈から推論する
    let x = 3; //aが型として扱われていることをTypeScriptは文脈から推論する
    class C {
    }
    let c = new C; //この文脈では、Cは値であるCを指している
    let E;
    (function (E) {
        E[E["F"] = 0] = "F";
        E[E["G"] = 1] = "G";
    })(E || (E = {}));
    let e = E.F; //この文脈では、Eは値であるEを指している
    class StringDatabase {
        constructor() {
            this.state = {};
        }
        get(key) {
            return key in this.state ? this.state[key] : null;
        }
        set(key, value) {
            this.state[key] = value;
        }
        static from(state) {
            let db = new StringDatabase;
            for (let key in state) {
                db.set(key, state[key]);
            }
            return db;
        }
    }
    // 引数をとるコンストラクターの宣言も可能
    class StringDatabase2 {
        constructor(state = {}) {
            this.state = state;
        }
    }
};
//# sourceMappingURL=5.6.js.map