"use strict";
const chapter6_1_4_2 = () => {
    class API {
        constructor(options) {
            this.options = options;
        }
    }
    new API({
        baseURL: 'https://api.mysite.com',
        tier: 'prod'
    });
    /*
    ここではフレッシュなオブジェクトを渡しているので(変数に割り当てられていない且つ、型アサーションされていない)
    TypeScriptによる過剰プロパティチェックが実行され、Options型に定義されていないフィールドであるbadTierを検出できている
    */
    new API({
        baseURL: 'https://api.mysite.com',
        badTier: 'prod'
    });
    /*
    型アサーション(as Options)でOptions型であることが主張されているため、フレッシュなオブジェクトでは無くなり
    TypeScriptによる過剰プロパティチェックが実行されずエラーが見逃される
    */
    new API({
        baseURL: 'https://api.mysite.com',
        badTier: 'prod' /// !!!
    });
    /*
    変数に割り当てられたオブジェクトはフレッシュなオブジェクトで無くなり、
    TypeScriptによる過剰プロパティチェックが実行されずエラーが見逃される。
    */
    let badOptions = {
        baseURL: 'https://api.mysite.com',
        badTier: 'prod' // !!!
    };
    new API(badOptions);
    /*
    optionsを明示的にOptionタイプであるとアノテートしているので、
    TypeScriptによる過剰プロパティチェックが行われ、Options型に定義されていないフィールドであるbadTierを検出できている
    */
    let options = {
        baseURL: 'https://api.mysite.com',
        badTier: 'prod'
    };
    new API(options);
};
//# sourceMappingURL=6.1.4.2.js.map