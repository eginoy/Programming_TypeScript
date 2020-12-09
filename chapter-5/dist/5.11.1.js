"use strict";
const chapter5_11_1 = () => {
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
    console.log(Shoe.create('boot'));
};
chapter5_11_1();
//# sourceMappingURL=5.11.1.js.map