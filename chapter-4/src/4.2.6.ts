const chapter4_2_6 = () => {
    let myButton = new HTMLButtonElement()

    type MyEvent<T> = {
        target: T
        type: string
    }

    let buttonEvent: MyEvent<HTMLButtonElement> = {
        target: myButton,
        type: 'a'
    }

    //Tのdefault typeはHTMLElement
    //MyEvent3と違いTはHTMLElement以外もバインドできる(デフォルト値を上書きすることで)
    type MyEvent2<T = HTMLElement> = {
        target: T,
        type: string
    }
    let buttonEvent2: MyEvent2<string> = { //MyEvent2はTのデフォルトtypeがHTMLElementであるだけなので別のtypeで上書きできる
        target: 'buttonTag',
        type: 'button'
    }

    //MyEvent2と比較しTは必ずHTMLEventでなければならない
    type MyEvent3<T extends HTMLElement = HTMLElement> = {
        target: T,
        type: string
    }
    let elementEvent: MyEvent3 = {
        target: new HTMLCanvasElement(), //HTMLElementに含まれるtypeならどれでも割り当ておｋ
        type: 'canvas'
    }
    let buttonEvent3: MyEvent3<HTMLButtonElement> = { //HTMLButtonElementはHTMLElementに含まれるので割り当ておｋ
        target: myButton,
        type: 'button'
    }
    // let buttonEvent4: MyEvent3<string> = { //stringはHTMLElementに含まれないので割り当て不可
    //     target: 'buttonElement',
    //     type: 'button'
    // }

    //有効
    type MyEvent4<
        Type extends string,
        Target extends HTMLElement = HTMLElement
        > = {
            target: Target,
            type: Type
        }

    //無効
    // type MyEvent5<
    //     Target extends HTMLElement = HTMLElement
    //     Type extends string //error デフォルトの型を持つジェネリック型はデフォルトの型を持たないジェネリック型より先に宣言できない
    // >={
    //     type: Type
    //     target: Target,
    // }
}
