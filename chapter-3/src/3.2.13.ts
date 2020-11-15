const chapter3_2_13 = () => {
    //ProgrammingTypeScriptでは列挙型(enum)の使用は避けるべきとある。
    enum Language {
        English,
        Spanish,
        Russian,
        Japanese
    }
    //上の例だと下のように推論している
    enum Language_ {
        English = 0,
        Spanish = 1,
        Russian = 2,
        Japanese = 3
    }
    
    let myFirstLanguage = Language.Japanese
    let mySecondLanguage = Language['English']

    //enumの分割
    //分割する場合は明示的に値を割り当てる
    enum Language2 {
        English = 0,
        Spanish = 1
    }
    enum Language2{
        Japanese = 2
    }
    
    enum Language3 {
        English = 0,
        Spanish = 200 + 300,
        Japanese //501と推論される
    }

    enum Color{
        Red = '#c100000',
        Blue = '#007ac1',
        Pink = 0xc10050,
        White = 255
    }
    let red = Color.Red
    let pink = Color.Pink

    let a = Color.Red //color
    // let b = Color.Green //error 定義していないのでエラー
    let c = Color[255] //string
    let d = Color[6] //! TypeScriptでエラーにならない

    //constで定義すると上記(!)で発生したようなエラーを検知できる
    //文字リテラルでの参照に制限されるため
    const enum Language4 {
        English,
        Japanese
    }
    // let e = Language4[3] //error

    const enum Flippable{
        Burger,
        Chair,
        Cup,
        Skatebord,
        Table
    }

    function flip(f: Flippable){
        return 'flipped it'
    }

    flip(Flippable.Chair) //'flipped it' 
    flip(Flippable.Cup) //'flipped it'
    flip(12) //!! 'flipped it' errorになるべき

    //上記(!!)で示したような動きを避けるためには明示的に文字列でenumを扱うようにする必要がある
    const enum Flippable2{
        Burger = 'Burger',
        Chair = 'Chair',
        Cup = 'Cup',
        Skatebord = 'Skatebord',
        Table = 'Table'
    }
    function flip2(f: Flippable2){
        return 'flipped it'
    }
    flip2(Flippable2.Burger)
    flip2(Flippable2.Cup)
    // flip2(12) //error
    // flip2('Hat') //error

}