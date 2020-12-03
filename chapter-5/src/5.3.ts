const chapter5_3 = () => {
    let set = new Set();
    set.add(1).add(2).add(3);
    set.has(2); //true
    set.has(4); //false

    class Set2 {
        constructor(){}
        private values: number[] = [];
        has(value: number): boolean{
            let hasValue = false;
            this.values.forEach(v => {
                if(v === value) hasValue = true;
            })
            return hasValue;
        }

        set(value: number): void{
            this.values.push(value);
        }

        add(value: number): Set2{
            this.values.push(value);
            return this;
        }

        add2(value: number): this{ //thisは各classの中では自身を指すので、サブクラスでメソッドのオーバーライドを行う必要が無くなる
            return this;
        }
    }

    class MutableSet extends Set2 {
        delete(value: number): boolean{
            return false //暫定
        }

        add(value: number): MutableSet{ //Set2から継承したaddはSet2 typeを返してくるのでMutableSetでオーバーライドする必要がある。(上記、add2で対応できる)
            return this ; //暫定
        }
    }
}