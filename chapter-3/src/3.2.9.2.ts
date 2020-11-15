const chapter3_2_9_2 = () => {
    type Cat = {name: string, purrs: boolean}
    type Dog = {name: string, barks: boolean, wags: boolean}
    type CatOrDogOrBoth = Cat | Dog
    type CatAndDog = Cat & Dog

    //cat
    let a:CatOrDogOrBoth = {
        name: 'Bonkers',
        purrs: true //喉を鳴らす
    }

    //dog
    a = {
        name: 'Domino',
        barks: true, //吠える
        wags: true //しっぽをふる
    }

    //両方
    a = {
        name: 'Donkers',
        barks: true,
        purrs: true,
        wags: true
    }

    let b:CatAndDog = {
        name: 'Domino',
        purrs: true,
        barks: true,
        wags: true
    }

    function trueOrNull(isTrue: boolean){
        if(isTrue){
            return 'true'
        }else{
            return null
        }
    }
    type Returns = string | null

    (a: string,b: number) => {
        return a || b
    }
}