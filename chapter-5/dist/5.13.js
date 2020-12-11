"use strict";
const chapter5_13 = () => {
    class BalletFlat {
        constructor() {
            this.purpose = 'dancing';
        }
    }
    class Boot {
        constructor() {
            this.purpose = 'woodcutting';
        }
    }
    class Sneaker {
        constructor() {
            this.purpose = 'walking';
        }
    }
    let Shoe = {
        create(type) {
            switch (type) {
                case 'balletFlat': return new BalletFlat;
                case 'boot': return new Boot;
                case 'sneaker': return new Sneaker;
            }
        }
    };
    console.log(Shoe.create('balletFlat'));
    console.log(Shoe.create('boot'));
    console.log(Shoe.create('sneaker'));
};
chapter5_13();
//# sourceMappingURL=5.13.js.map