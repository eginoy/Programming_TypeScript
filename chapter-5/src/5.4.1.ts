const chapter5_4_1 = () => {
    //Userは1つのフィールドnameを持つ
    interface User{
        name: string
    }

    //この時点でUserはnameとageの2つのフィールドを持つ(TypeScriptによる自動的に結合される)
    interface User{
        age: number
    }

    let user: User = {
        name: 'Ashley',
        age: 30
    }


    // error 型エイリアスでは自動結合されない
    // type User2 = {
    //     name: string
    // }
    // type User2 = {
    //     age: number
    // }

    interface User3 {
        age: string
    }
    // interface User3{
    //     age: number //ageフィールドに対して矛盾したアノテートをしているのでerror
    // }

    //error インターフェースでジェネリックを宣言しているとき、2つのインターフェースを結合するにはジェネリックの名前まで揃えないとerrorになる(AgeとAge2)
    // interface User4<Age extends number>{
    //     age: Age
    // }

    // interface User4<Age2 extends number>{
    //     age: Age2
    // }
}