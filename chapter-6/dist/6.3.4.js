"use strict";
const chapter6_3_4 = () => {
    let Currency = {
        from(value, unit) {
            return {
                unit: unit,
                value
            };
        }
    };
    //Currencyを型として使用している
    let amountDue = {
        unit: 'JPY',
        value: 83733.10
    };
    //Currencyを値として使用している
    let otherAmountDue = Currency.from(70000, 'JPY');
};
//# sourceMappingURL=6.3.4.js.map