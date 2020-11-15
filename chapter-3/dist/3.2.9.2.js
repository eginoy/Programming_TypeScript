"use strict";
const chapter3_2_9_2 = () => {
    //cat
    let a = {
        name: 'Bonkers',
        purrs: true //喉を鳴らす
    };
    //dog
    a = {
        name: 'Domino',
        barks: true,
        wags: true //しっぽをふる
    };
    //両方
    a = {
        name: 'Donkers',
        barks: true,
        purrs: true,
        wags: true
    };
    let b = {
        name: 'Domino',
        purrs: true,
        barks: true,
        wags: true
    };
    function trueOrNull(isTrue) {
        if (isTrue) {
            return 'true';
        }
        else {
            return null;
        }
    }
    (a, b) => {
        return a || b;
    };
};
//# sourceMappingURL=3.2.9.2.js.map