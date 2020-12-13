const chapter6_1_2_2 = () => {
    class Animal {}
    class Bird extends Animal {
        chirp(){}
    }
    class Crow extends Bird{
        caw(){}
    }

    function chirp(bird: Bird): Bird{
        bird.chirp()
        return bird
    }
    chirp(new Animal) //error
    chirp(new Bird)
    chirp(new Crow)

    function clone(f: (b: Bird)=> Bird): void{
        let parent = new Bird()
        let babyBird = f(parent)
        babyBird.chirp()
    }
    function birdToBird(bird: Bird): Bird{
        return new Bird()
    }
    clone(birdToBird) // ok

    function birdToCrow(d: Bird): Crow{
        return new Crow()
    }
    clone(birdToCrow) // ok

    function birdToAnimal(d: Bird): Animal{
        return new Animal()
    }
    /* 
    error clone内でchirpを呼び出そうとしているがAnimal型には実装されていないのでエラー
    cloneで期待されている引数の戻り値の型(Bird)のスーパータイプが返されるため(AnimalはBirdのスーパータイプ)
    */
    clone(birdToAnimal)


    function animalToBird(a: Animal): Bird{
        return new Bird()
    }
    clone(animalToBird) //ok

    function crowToBird(c: Crow): Bird{
        c.caw()
        return new Bird()
    }

    /*
    コンパイル時エラー
    Crowで定義されているcaw()はCrowのスーパータイプであるBirdでは定義されていないし、
    定義されているとは限らない(安全でない)
    */
    clone(crowToBird)
}