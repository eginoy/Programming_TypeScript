const chapter6_1_2_1 = () => {
    //サーバーから取得した既存のユーザー
    type ExistinUser = {
        id: number
        name: string
    }   
    
    //サーバーにまだ保存されていないユーザー
    type NewUser = {
        name: string
    }

    function deleteUser(user:{id?:number, name: string}){
        delete user.id
    }

    let existinUser: ExistinUser = {
        id: 123456,
        name: 'Ima User'
    }
    deleteUser(existinUser)

    /*
    TypeScriptはdeleteUser関数でidプロパティを削除されたことを知らないので、
    下記console.log時点ではidはnumber型であると推論されている。(実際はdeleteされているのでundefined)
    そのため型安全ではない。
    (そもそも論としてはプロパティをdeleteするケースはあまりないが)
    */
    console.log(existinUser.id)

    //仕様変更前のidにstringが使用されているケースを想定してidの型を拡大
    type LegacyUser = {
        id?: number | string,
        name: string
    }

    let legacyUser: LegacyUser = {
        id: '123456',
        name: 'Xin Yang'
    }

    /*
    deleteUserの引数に期待されるidはnumber | undefinedであるのに対し、
    渡しているidの型が number | string | undefined であるためエラーになる。
    期待される型(number | undefined)のスーパータイプ(number | string | undefined)を渡しているため
    */
    deleteUser(legacyUser) 
}