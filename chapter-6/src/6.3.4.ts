const chapter6_3_4 = () => {
    type Unit = 'EUR' | 'GBP' | 'JPY' | 'USD'
    /*
    値と型の名前空間は別なので同じスコープ内で同じ名前を持つことができる
    */
    type Currency = {
        unit: Unit
        value: number
    }
    let Currency = {
        from(value: number, unit: Unit): Currency{
            return {
                unit: unit,
                value
            }
        }
    }

    //Currencyを型として使用している
    let amountDue: Currency = {
        unit: 'JPY',
        value: 83733.10
    }
    //Currencyを値として使用している
    let otherAmountDue = Currency.from(70000,'JPY')
}
