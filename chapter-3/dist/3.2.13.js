"use strict";
const chapter3_2_13 = () => {
    //ProgrammingTypeScriptでは列挙型(enum)の使用は避けるべきとある。
    let Language;
    (function (Language) {
        Language[Language["English"] = 0] = "English";
        Language[Language["Spanish"] = 1] = "Spanish";
        Language[Language["Russian"] = 2] = "Russian";
        Language[Language["Japanese"] = 3] = "Japanese";
    })(Language || (Language = {}));
    //上の例だと下のように推論している
    let Language_;
    (function (Language_) {
        Language_[Language_["English"] = 0] = "English";
        Language_[Language_["Spanish"] = 1] = "Spanish";
        Language_[Language_["Russian"] = 2] = "Russian";
        Language_[Language_["Japanese"] = 3] = "Japanese";
    })(Language_ || (Language_ = {}));
    let myFirstLanguage = Language.Japanese;
    let mySecondLanguage = Language['English'];
    //enumの分割
    //分割する場合は明示的に値を割り当てる
    let Language2;
    (function (Language2) {
        Language2[Language2["English"] = 0] = "English";
        Language2[Language2["Spanish"] = 1] = "Spanish";
    })(Language2 || (Language2 = {}));
    (function (Language2) {
        Language2[Language2["Japanese"] = 2] = "Japanese";
    })(Language2 || (Language2 = {}));
    let Language3;
    (function (Language3) {
        Language3[Language3["English"] = 0] = "English";
        Language3[Language3["Spanish"] = 500] = "Spanish";
        Language3[Language3["Japanese"] = 501] = "Japanese"; //501と推論される
    })(Language3 || (Language3 = {}));
    let Color;
    (function (Color) {
        Color["Red"] = "#c100000";
        Color["Blue"] = "#007ac1";
        Color[Color["Pink"] = 12648528] = "Pink";
        Color[Color["White"] = 255] = "White";
    })(Color || (Color = {}));
    let red = Color.Red;
    let pink = Color.Pink;
    let a = Color.Red; //color
    // let b = Color.Green //error 定義していないのでエラー
    let c = Color[255]; //string
    let d = Color[6]; //! TypeScriptでエラーにならない
    function flip(f) {
        return 'flipped it';
    }
    flip(1 /* Chair */); //'flipped it' 
    flip(2 /* Cup */); //'flipped it'
    flip(12); //!! 'flipped it' errorになるべき
    function flip2(f) {
        return 'flipped it';
    }
    flip2("Burger" /* Burger */);
    flip2("Cup" /* Cup */);
    // flip2(12) //error
    // flip2('Hat') //error
};
//# sourceMappingURL=3.2.13.js.map