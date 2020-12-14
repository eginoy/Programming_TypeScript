"use strict";
const chapter6_1_2_2 = () => {
    class Animal {
    }
    class Bird extends Animal {
        chirp() { }
    }
    class Crow extends Bird {
        caw() { }
    }
    function chirp(bird) {
        bird.chirp();
        return bird;
    }
    chirp(new Animal); //error
    chirp(new Bird);
    chirp(new Crow);
    function clone(f) {
        let parent = new Bird();
        let babyBird = f(parent);
        babyBird.chirp();
    }
    function birdToBird(bird) {
        return new Bird();
    }
    clone(birdToBird); // ok
    function birdToCrow(d) {
        return new Crow();
    }
    clone(birdToCrow); // ok
    function birdToAnimal(d) {
        return new Animal();
    }
    /*
    error clone内でchirpを呼び出そうとしているがAnimal型には実装されていないのでエラー
    cloneで期待されている引数の戻り値の型(Bird)のスーパータイプが返されるため(AnimalはBirdのスーパータイプ)
    */
    clone(birdToAnimal);
    function animalToBird(a) {
        return new Bird();
    }
    clone(animalToBird); //ok
    function crowToBird(c) {
        c.caw();
        return new Bird();
    }
    /*
    コンパイル時エラー
    Crowで定義されているcaw()はCrowのスーパータイプであるBirdでは定義されていないし、
    定義されているとは限らない(安全でない)
    */
    clone(crowToBird);
};
//# sourceMappingURL=6.1.2.2.js.map