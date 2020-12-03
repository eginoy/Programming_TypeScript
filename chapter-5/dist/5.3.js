"use strict";
const chapter5_3 = () => {
    let set = new Set();
    set.add(1).add(2).add(3);
    set.has(2); //true
    set.has(4); //false
    class Set2 {
        constructor() {
            this.values = [];
        }
        has(value) {
            let hasValue = false;
            this.values.forEach(v => {
                if (v === value)
                    hasValue = true;
            });
            return hasValue;
        }
        set(value) {
            this.values.push(value);
        }
        add(value) {
            this.values.push(value);
            return this;
        }
        add2(value) {
            return this;
        }
    }
    class MutableSet extends Set2 {
        delete(value) {
            return false; //暫定
        }
        add(value) {
            return this; //暫定
        }
    }
};
//# sourceMappingURL=5.3.js.map