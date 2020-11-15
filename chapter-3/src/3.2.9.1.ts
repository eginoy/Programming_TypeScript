const chapter3_2_9_1 = () => {
    type Age = number
    type Person = {
        name: string
        age: Age
    }

    let age: Age = 55
    // let age = 55 //こっちでもおｋ
    let driver: Person = {
        name: 'James May',
        age: age
    }
}