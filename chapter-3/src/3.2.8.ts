const chapter3_2_8 = () => {
    // let a: object = {
    //     b: 'x'
    // }
    // let c = a.b //error object.bを参照しようとしている

    const a: { b: number } = {
        b: 1
    }
    console.log(a.b)

    let e = {
        f: 'x' //{f:string type}
    }
    let g = e.f //string type

    let h = {
        i: {
            j: 'x'
        }
    }
    let k = h.i.j //strint type

    let l: { m: number } = { //property mをnumber typeで型付けしている
        m: 1
    }

    let n: {
        firstName: string,
        lastName: string
    } = {
        firstName: 'john',
        lastName: 'barrowman'
    }

    class Person {
        constructor(
            public firstName: string,
            public lastName: string
        ) { }
    
    let o = new Person('matt', 'smith')

    let p: { a: number }
    // p = {} //error propertyが足りない
    // p = {
    //     a:1,
    //     b:2 //error pの型に存在しないpropertyを割り当てようとしたので
    // }

    let q: number
    // let r = q * 10 //qは宣言してから割り当てられていないことをtypescriptが教えてくれる
    let s
    // let r = s * 10 //sはアノテートしていなくても上記同様errorになる 

    let t: {
        a: number //property a は必須
        b?: string //property bはundefined(割り当てなくても良い)かstring type
        [key: number]: boolean //keyがnumber typeであり,valueがboolean typeであるpropertyを複数持てる
        // [key: number]: string //error シグネチャ([key: number]:の部分)が重複している
    }

    t = { a: 1 }
    t = { a: 1, b: undefined }
    t = { a: 1, 10: true }
    t = { a: 1, 10: true, 20: false }
    // t = {10: true} //error property aが欠けている
    // t = {a: 1, 33:'red'} //error value に stiring typeを割り当てている

    let u: {
        [インデックスシグネチャの名前はkeyでなくてもよい: number]: boolean
    } = {
        1: true,
        2: false,
        3: true
    }

    let user: {
        readonly firstName: string
        lastName: string
    } = {
        firstName: 'キラキラネーム',
        lastName: '一般的な苗字'
    }
    user.firstName = '一般的なfirstName' //error firstNameはreadonlyのため再割り当て不可
    user.lastName = 'かっこいい苗字'

    //オブジェクトがどのようなフィールドを持つか重視しない場合にはobjectリテラルを使う。
    //{}（Object）リテラルは避ける
    //空の{}リテラルはnullとundefined以外は割り当て可能なのでなるべく使わない
    let danger: {}
    danger = {}
    danger = { x: 1 }
    danger = []
    danger = 2
    // danger = null //error
    // danger = undefined //error

    //代わりにobjectリテラルを使用するのが望ましい
    let notDanger: object
    notDanger = {}
    notDanger = { x: 1 }
    notDanger = []
    // notDanger = 2 //error
    // notDanger = null //error
    // notDanger = undefined //error

}