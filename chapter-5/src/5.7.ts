const chapter5_7 = () => {
    class MyMap<K,V>{ //クラス宣言時に割り当てられるジェネリック型(K,V)。クラススコープ内で使用できる
        constructor(initialKey: K, initialValue: V){} //コンストラクターではジェネリック型を宣言できない。
        
        getKey(key: K): V{} 
        setKey(key: K,value: V): void{}
        merge<K1,V1>(map: MyMap<K1,V1>): MyMap<K | K1, V | V1>{} //独自のジェネリック型も宣言できる(V1,V2)
        static of<K,V>(k: K,v: V): MyMap<K,V>{} //静的メソッドはクラスのジェネリックにアクセスできない。そのためクラス宣言時の(K,V)とofメソッドの(K,V)は別のジェネリック       
    }

    //インターフェースでもジェネリック型は使用可能
    interface MyMap<K,V>{
        get(key: K): V
        set(key: K,value: V): void
        merage<K1,V1>(map: MyMap<K1,V1>): MyMap<K | K1,V | V1>
    }

    let a = new MyMap<string,number>('k',1) //MyMap<string,number>
    let b = new MyMap('k',true) //MyMap<string,boolean>
    
    a.get('k') // 1
    b.set('k',false)
}