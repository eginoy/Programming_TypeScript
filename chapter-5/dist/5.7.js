"use strict";
const chapter5_7 = () => {
    class MyMap {
        constructor(initialKey, initialValue) { } //コンストラクターではジェネリック型を宣言できない。
        getKey(key) { }
        setKey(key, value) { }
        merge(map) { } //独自のジェネリック型も宣言できる(V1,V2)
        static of(k, v) { } //静的メソッドはクラスのジェネリックにアクセスできない。そのためクラス宣言時の(K,V)とofメソッドの(K,V)は別のジェネリック       
    }
    let a = new MyMap('k', 1); //MyMap<string,number>
    let b = new MyMap('k', true); //MyMap<string,boolean>
    a.get('k'); // 1
    b.set('k', false);
};
//# sourceMappingURL=5.7.js.map