"use strict";
const chapter6_1_2_1 = () => {
    function deleteUser(user) {
        delete user.id;
    }
    let existinUser = {
        id: 123456,
        name: 'Ima User'
    };
    deleteUser(existinUser);
    /*
    TypeScriptはdeleteUser関数でidプロパティを削除されたことを知らないので、
    下記console.log時点ではidはnumber型であると推論されている。(実際はdeleteされているのでundefined)
    そのため型安全ではない。
    (そもそも論としてはプロパティをdeleteするケースはあまりないが)
    */
    console.log(existinUser.id);
    let legacyUser = {
        id: '123456',
        name: 'Xin Yang'
    };
    /*
    deleteUserの引数に期待されるidはnumber | undefinedであるのに対し、
    渡しているidの型が number | string | undefined であるためエラーになる。
    期待される型(number | undefined)のスーパータイプ(number | string | undefined)を渡しているため
    */
    deleteUser(legacyUser);
};
//# sourceMappingURL=6.1.2.1.js.map