const chapter6_10_3 = () => {
    //TかUのどちらかに含まれる(両方には含まれない)型を計算するExclusive<T,U>の実装
    //Exclusive<1|2|3,2|3|4>は1|4になる
    type Exclusive<T,U> = Exclude<T,U> | Exclude<U,T>
    type R = Exclusive<1|2|3,2|3|4> // 1 | 4

    type U = Exclusive<1|2,2|4> // 1 | 4
    /*
      1. Exclusive<1|2,2|4>からスタート
      2. Exclude<1|2,2|4> | Exclude<2|4,1|2> に置き換わっている
      3. (1 | 2  extends 2 | 4 ? never | 1 | 2) | (2 | 4  extends 1 | 2 ? never | 2 | 4) に置き換わっている
      4. (1 extends 2 | 4 ? never : 1) | (2 extends 2 | 4 ? never : 2) | (2 extends 1 | 2 ? never : 2) | (4 extends 1 | 2 ? never : 4)に分配される。
      5. 1 | never | never | 4に単純化される
      6. 1 | 4 更に単純化
     */
}