const chapter3_2_12 = () => {

    //number か nullを返す関数
    function a(x: number){
        if(x < 10){
            return x
        }
        return null
    }

    // undefinedを返す関数
    function b(){
        return undefined
    }

    //voidを返す関数
    function c(){
        let a = 2 + 2
        let b = a * a
    }

    //neverを返す関数
    function d(){
        throw TypeError('I always error')
    }

    //neverを返すもう一つの関数
    function e(){
        //無限ループ
        while(true){
            () => {}
        }
    }
}