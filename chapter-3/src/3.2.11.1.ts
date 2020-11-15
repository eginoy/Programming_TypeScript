const chpter3_2_11_1 = () => {
    let as: readonly number[] = [1,2,3] //readonly number[] type
    let bs: readonly number[] = as.concat(4) //readonly number[] type concatは元の配列を破壊しないメソッドなのでおｋ
    let three = bs[2] //number type
    // as[4] = 5 //error readonly のため再割り当て不可

    //type A,B,Cはすべて同じtype
    type A = readonly string[] // readonly string[] type
    type B = ReadonlyArray<string> // readonly string[] type
    type C = Readonly<string> // readonly string[] type

    //type D,Eは同じtype
    type D = readonly [number,string] // readonly [number,string] type
    type E = Readonly<[number,string]> // readonly [number,string] type
}