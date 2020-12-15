const chapter6_1_4_2 = () => {
    type Options = {
        baseURL: string
        cacheSize?: number
        tier?: 'prod' | 'dev'
    }

    class API{
        constructor(private options: Options){}
    }

    new API({ //1
        baseURL: 'https://api.mysite.com',
        tier: 'prod'
    })

    /*
    ここではフレッシュなオブジェクトを渡しているので(変数に割り当てられていない且つ、型アサーションされていない) 
    TypeScriptによる過剰プロパティチェックが実行され、Options型に定義されていないフィールドであるbadTierを検出できている
    */
    new API({ //2
        baseURL: 'https://api.mysite.com',
        badTier: 'prod' 
    })

    /*
    型アサーション(as Options)でOptions型であることが主張されているため、フレッシュなオブジェクトでは無くなり
    TypeScriptによる過剰プロパティチェックが実行されずエラーが見逃される 
    */
    new API({ //3
        baseURL: 'https://api.mysite.com',
        badTier: 'prod' /// !!!
    } as Options)

    /*
    変数に割り当てられたオブジェクトはフレッシュなオブジェクトで無くなり、
    TypeScriptによる過剰プロパティチェックが実行されずエラーが見逃される。
    */
    let badOptions = { //4
        baseURL: 'https://api.mysite.com',
        badTier: 'prod' // !!!
    }
    new API(badOptions)

    /*
    optionsを明示的にOptionタイプであるとアノテートしているので、
    TypeScriptによる過剰プロパティチェックが行われ、Options型に定義されていないフィールドであるbadTierを検出できている
    */
    let options: Options = { //5
        baseURL: 'https://api.mysite.com',
        badTier: 'prod'
    }
    new API(options)
}