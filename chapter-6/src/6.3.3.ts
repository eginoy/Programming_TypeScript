const chapter6_3_3 = () => {
    type WeekDay = 'Mon' | 'Tue'| 'Wed' | 'Thu' | 'Fri'  
    type Day = WeekDay | 'Sat' | 'Sun'

    //Keyに指定してるWeekDayのフィールドが定義されていないと、警告してくれる
    let nextDay: {[K in WeekDay]: Day} = {
        Mon: 'Tue'
    }

    //上の例で警告表示しないようにするには、フィールドを省略可能にする
    let optinalNextDay: {[K in WeekDay]?: Day} = {
        Mon: 'Tue'
    }

    /*
    Keyはキー
    UnionTypeは合併型
    ValueTypeは値の型
    を表す
    TypeScriptのRecord型はマップ型を使用して実装されている
    */
    type MyMappedType ={
        [Key in UnionType]: ValueType
    }

    type Account = {
        id: number,
        isEmployee: boolean,
        notes: string[]
    }
    
    //すべてのフィールドを省略可能にする
    type OptionalAccount = {
        [K in keyof Account]?: Account[K]
    }

    //すべてのフィールドにnullを許容する
    type NullableAccount = {
        [K in keyof Account]: Account[K] | null
    }

    //すべてのフィールドを読み取り専用にする
    type ReadonlyAccount = {
        readonly [K in keyof Account]: Account[K]
    }

    //すべてのフィールドを再度書き込み可能にする(Accountと同様)
    type Account2 = {
        -readonly [K in keyof ReadonlyAccount]: Account[K]
    }

    //すべてのフィールドを再び必須にする(Accountと同様)
    type Account3 = {
        [K in keyof OptionalAccount]-?: Account[K] 
    }

    //上の例は組み込みのマップ型が用意されている
    type OptionalAccount2 = Partial<Account> //すべてのフィールドは省略可能
    type ReadonlyAccount2 = Readonly<Account> //すべてのフィールドは読み取り専用
    type Account3_2 = Required<Account> //すべてのフィールドは必須
    type MinimalAccount = Pick<Account,'id' | 'isEmployee'> //指定されたKeyだけを持つ、Objectのサブタイプを返す    
}